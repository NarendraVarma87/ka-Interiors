import os
import json
import base64
import io
from PIL import Image, ImageOps, ImageFilter

os.makedirs('public/images/projects', exist_ok=True)
os.makedirs('public/images/materials', exist_ok=True)
os.makedirs('public/images/brand', exist_ok=True)

# Helper to save both 1600w and 800w webp
blur_placeholders = {}

def process_and_save(img, slug, name):
    # Save high-res (up to 1600w)
    im_1600 = img.copy()
    im_1600.thumbnail((1600, 1600), Image.Resampling.LANCZOS)
    path_1600 = f'public/images/{slug}/{name}-1600.webp'
    im_1600.save(path_1600, 'WEBP', quality=88)

    # Save 800w
    im_800 = img.copy()
    im_800.thumbnail((800, 800), Image.Resampling.LANCZOS)
    path_800 = f'public/images/{slug}/{name}-800.webp'
    im_800.save(path_800, 'WEBP', quality=85)

    # Generate tiny blur placeholder base64 (20px)
    im_blur = img.copy()
    im_blur.thumbnail((24, 24), Image.Resampling.BILINEAR)
    buf = io.BytesIO()
    im_blur.save(buf, format='WEBP', quality=50)
    b64 = "data:image/webp;base64," + base64.b64encode(buf.getvalue()).decode('utf-8')
    blur_placeholders[f'{slug}/{name}'] = {
        'src': f'/images/{slug}/{name}-1600.webp',
        'src800': f'/images/{slug}/{name}-800.webp',
        'blurDataURL': b64,
        'width': im_1600.width,
        'height': im_1600.height,
        'aspectRatio': round(im_1600.width / im_1600.height, 3)
    }
    print(f"Processed: {slug}/{name} -> {im_1600.size}")

print("Starting image extraction...")

# --- BRAND LOGOS ---
p1 = Image.open('public/source/page_01.jpg')
# Phoenix KA monogram
# Monogram box: x: 1900 to 3920, y: 560 to 2200
monogram_crop = p1.crop((1900, 560, 3920, 2200))
# Let's create transparent version:
# Background is warm espresso (~ #2B1408 to #401d0a)
mono_rgba = monogram_crop.convert("RGBA")
mono_data = mono_rgba.getdata()
new_data = []
# Calculate background color sample at corners
bg_r, bg_g, bg_b = 43, 20, 8
for item in mono_data:
    r, g, b, a = item
    # Gold pixels have significantly higher r, g and notably g > 1.2 * b or r > 100
    # While espresso background has r < 60, g < 35, b < 20
    # Let's calculate distance from espresso brown or luminance of gold
    is_gold = (r > 80 and g > 55 and r > b + 20) or (r > 130 and g > 90)
    if is_gold:
        new_data.append((r, g, b, 255))
    else:
        # Check smooth edge transition
        diff = max(0, r - 45) + max(0, g - 25)
        if diff > 30:
            alpha = min(255, int((diff - 30) * 4))
            new_data.append((r, g, b, alpha))
        else:
            new_data.append((0, 0, 0, 0))

mono_rgba.putdata(new_data)
# Save transparent monogram
mono_rgba.thumbnail((800, 800), Image.Resampling.LANCZOS)
mono_rgba.save('public/images/brand/ka-phoenix-monogram.png', 'PNG')

# Favicon 32x32 and Apple Touch Icon 180x180
fav_32 = mono_rgba.copy()
fav_32.thumbnail((32, 32), Image.Resampling.LANCZOS)
fav_32.save('public/favicon.ico', format='ICO')
fav_32.save('public/favicon.png', 'PNG')

apple_icon = Image.new("RGBA", (180, 180), (43, 20, 8, 255))
mono_scaled = mono_rgba.copy()
mono_scaled.thumbnail((140, 140), Image.Resampling.LANCZOS)
offset_x = (180 - mono_scaled.width) // 2
offset_y = (180 - mono_scaled.height) // 2
apple_icon.paste(mono_scaled, (offset_x, offset_y), mono_scaled)
apple_icon.save('public/apple-touch-icon.png', 'PNG')

# Full logo with text
logo_full_crop = p1.crop((1400, 560, 4600, 2850))
logo_full_rgba = logo_full_crop.convert("RGBA")
lf_data = logo_full_rgba.getdata()
lf_new = []
for item in lf_data:
    r, g, b, a = item
    is_text_or_gold = (r > 75 and g > 50 and r > b + 15) or (r > 120 and g > 85) or (r > 180 and g > 180 and b > 180)
    if is_text_or_gold:
        lf_new.append((r, g, b, 255))
    else:
        diff = max(0, r - 45) + max(0, g - 25)
        if diff > 25:
            alpha = min(255, int((diff - 25) * 5))
            lf_new.append((r, g, b, alpha))
        else:
            lf_new.append((0, 0, 0, 0))

logo_full_rgba.putdata(lf_new)
logo_full_rgba.thumbnail((1200, 1200), Image.Resampling.LANCZOS)
logo_full_rgba.save('public/images/brand/ka-logo-full.png', 'PNG')

# High quality hero brand cover
process_and_save(p1, 'brand', 'brand-cover-hero')

# --- MATERIALS ---
p9 = Image.open('public/source/page_09.jpg')
# 4 material tiles on page 9
# Fluted Walnut: 3260 to 3820, 2760 to 3580
# Antique Brass: 3910 to 4470, 2760 to 3580
# Indian Quartzite: 4540 to 5100, 2760 to 3580
# Premium Fabric: 5180 to 5740, 2760 to 3580
mat_walnut = p9.crop((3260, 2770, 3820, 3570))
mat_brass = p9.crop((3910, 2770, 4470, 3570))
mat_quartzite = p9.crop((4540, 2770, 5100, 3570))
mat_fabric = p9.crop((5180, 2770, 5740, 3570))

process_and_save(mat_walnut, 'materials', 'fluted-walnut')
process_and_save(mat_brass, 'materials', 'antique-brass')
process_and_save(mat_quartzite, 'materials', 'indian-quartzite')
process_and_save(mat_fabric, 'materials', 'premium-fabric')

# --- RESIDENTIAL CHAPTERS ---
# 1. Grand Foyer
p8 = Image.open('public/source/page_08.jpg')
foyer_hero = p8.crop((280, 320, 3320, 1820))
process_and_save(foyer_hero, 'projects', 'grand-foyer-main')

# Also staircase from page 3
p3 = Image.open('public/source/page_03.jpg')
staircase_foyer = p3.crop((120, 120, 3720, 3880))
process_and_save(staircase_foyer, 'projects', 'grand-foyer-staircase')

# 2. The Salone / Lounge
salone_hero = p8.crop((230, 1880, 3380, 3520))
process_and_save(salone_hero, 'projects', 'salone-main')

p6 = Image.open('public/source/page_06.jpg')
soul_daybed = p6.crop((1860, 1100, 4580, 3500))
process_and_save(soul_daybed, 'projects', 'salone-daybed')

lounge_wall = p9.crop((120, 160, 5880, 1680))
process_and_save(lounge_wall, 'projects', 'the-lounge-main')

# 3. Sanctuary (Living Room)
p10 = Image.open('public/source/page_10.jpg')
sanctuary_main = p10.crop((150, 920, 4000, 3450))
process_and_save(sanctuary_main, 'projects', 'sanctuary-living-main')
sanctuary_relief = p10.crop((4050, 800, 5820, 2220))
process_and_save(sanctuary_relief, 'projects', 'sanctuary-relief-wall')
sanctuary_hallway = p10.crop((4050, 2250, 5820, 3500))
process_and_save(sanctuary_hallway, 'projects', 'sanctuary-hallway')

# 4. Sacred Spaces (Puja / Mandir)
p11 = Image.open('public/source/page_11.jpg')
mandir_main = p11.crop((280, 200, 3160, 3780))
mandir_detail = p11.crop((3240, 2600, 4700, 3780))
process_and_save(mandir_main, 'projects', 'sacred-spaces-mandir')
process_and_save(mandir_detail, 'projects', 'sacred-spaces-detail')

# 5. The Art of Devotion (Murals)
p13 = Image.open('public/source/page_13.jpg')
devotion_ram = p13.crop((2150, 580, 5850, 3250))
process_and_save(devotion_ram, 'projects', 'art-of-devotion-ram')

p12 = Image.open('public/source/page_12.jpg')
pichwai_main = p12.crop((160, 560, 4200, 3460))
pichwai_detail = p12.crop((4240, 990, 5740, 2180))
process_and_save(pichwai_main, 'projects', 'art-of-devotion-pichwai')
process_and_save(pichwai_detail, 'projects', 'art-of-devotion-detail')

# 6. Aesthetic Designs (Sculpted Relief Walls)
p14 = Image.open('public/source/page_14.jpg')
relief_lotus = p14.crop((280, 400, 2400, 2750))
relief_lily = p14.crop((2370, 900, 3960, 3200))
process_and_save(relief_lotus, 'projects', 'aesthetic-designs-lotus')
process_and_save(relief_lily, 'projects', 'aesthetic-designs-lily')

# 7. The Art of Tradition (Heritage)
p15 = Image.open('public/source/page_15.jpg')
tradition_living = p15.crop((260, 400, 2200, 3000))
tradition_bed = p15.crop((2180, 850, 3950, 3300))
process_and_save(tradition_living, 'projects', 'art-of-tradition-living')
process_and_save(tradition_bed, 'projects', 'art-of-tradition-bed')

# 8. Crafted With Character
p16 = Image.open('public/source/page_16.jpg')
crafted_krishna = p16.crop((2300, 480, 5850, 3180))
process_and_save(crafted_krishna, 'projects', 'crafted-with-character-main')

# 9. The Dining Salone
p17 = Image.open('public/source/page_17.jpg')
dining_main = p17.crop((2200, 550, 5800, 3250))
process_and_save(dining_main, 'projects', 'the-dining-salone-main')

# 10. The Culinary Studio
p18 = Image.open('public/source/page_18.jpg')
kitchen_bar = p18.crop((3380, 280, 5850, 3580))
kitchen_arched = p18.crop((2020, 460, 3350, 1480))
kitchen_dining = p18.crop((2020, 1530, 3350, 2580))
kitchen_modular = p18.crop((2020, 2630, 3350, 3500))
process_and_save(kitchen_bar, 'projects', 'culinary-studio-bar')
process_and_save(kitchen_arched, 'projects', 'culinary-studio-arched')
process_and_save(kitchen_dining, 'projects', 'culinary-studio-dining')
process_and_save(kitchen_modular, 'projects', 'culinary-studio-modular')

# 11. The Heart of the Home
p19 = Image.open('public/source/page_19.jpg')
heart_modular = p19.crop((240, 240, 2600, 2100))
heart_open_dining = p19.crop((2600, 1850, 5800, 3500))
process_and_save(heart_modular, 'projects', 'heart-of-home-kitchen')
process_and_save(heart_open_dining, 'projects', 'heart-of-home-dining')

# 12. Balcony / Terrace
p20 = Image.open('public/source/page_20.jpg')
balcony_main = p20.crop((0, 0, 6000, 4000))
process_and_save(balcony_main, 'projects', 'balcony-terrace-main')

# 13. The Little Atelier (Kids)
p21 = Image.open('public/source/page_21.jpg')
kids_playroom = p21.crop((360, 240, 2950, 3050))
kids_study = p21.crop((3000, 540, 4300, 3350))
process_and_save(kids_playroom, 'projects', 'little-atelier-playroom')
process_and_save(kids_study, 'projects', 'little-atelier-study')

# 14. Sanctuaries of Rest (Bedrooms)
p22 = Image.open('public/source/page_22.jpg')
bed_master = p22.crop((1850, 240, 5870, 2300))
bed_sub1 = p22.crop((1850, 2350, 3140, 3500))
bed_sub2 = p22.crop((3240, 2350, 4520, 3500))
bed_sub3 = p22.crop((4620, 2350, 5870, 3500))
process_and_save(bed_master, 'projects', 'sanctuary-rest-master')
process_and_save(bed_sub1, 'projects', 'sanctuary-rest-sub1')
process_and_save(bed_sub2, 'projects', 'sanctuary-rest-sub2')
process_and_save(bed_sub3, 'projects', 'sanctuary-rest-sub3')

# 15. The Teenage Edit
p23 = Image.open('public/source/page_23.jpg')
# Note: we crop ONLY the central soccer mural bed, omitting the Jumpman trademark
teen_main = p23.crop((1960, 600, 4020, 3380))
process_and_save(teen_main, 'projects', 'teenage-edit-main')

# 16. Commercial: Kafe (Interior & Exterior & Rooftop Plunge Pool)
p24 = Image.open('public/source/page_24.jpg')
kafe_interior_bar = p24.crop((2040, 0, 6000, 2000))
kafe_exterior_dusk = p24.crop((1980, 2080, 6000, 3650))
process_and_save(kafe_interior_bar, 'projects', 'commercial-kafe-interior-bar')
process_and_save(kafe_exterior_dusk, 'projects', 'commercial-kafe-exterior-dusk')

p25 = Image.open('public/source/page_25.jpg')
kafe_atrium = p25.crop((1490, 430, 3440, 3500))
kafe_rooftop_pool = p25.crop((3500, 430, 5870, 1920))
kafe_illuminated_stairs = p25.crop((3500, 1980, 5870, 3500))
process_and_save(kafe_atrium, 'projects', 'commercial-kafe-atrium')
process_and_save(kafe_rooftop_pool, 'projects', 'commercial-kafe-rooftop-pool')
process_and_save(kafe_illuminated_stairs, 'projects', 'commercial-kafe-illuminated-stairs')

p26 = Image.open('public/source/page_26.jpg')
kafe_night_render = p26.crop((3180, 1100, 5880, 3180))
process_and_save(kafe_night_render, 'projects', 'commercial-kafe-night-render')

# 17. Final Lounge (Page 27)
p27 = Image.open('public/source/page_27.jpg')
final_lounge = p27.crop((0, 0, 6000, 4000))
process_and_save(final_lounge, 'projects', 'final-cta-lounge')

# Write out the generated blur placeholders and metadata to public/images/manifest.json
with open('public/images/manifest.json', 'w') as f:
    json.dump(blur_placeholders, f, indent=2)

print(f"Extraction complete! Processed {len(blur_placeholders)} images.")
