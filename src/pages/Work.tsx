import Navigation from "@/components/Navigation";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import { useState } from "react";

const Work = () => {
  const projects = [
    {
      prompt:
        "Design a luxury, elegant, and timeless black and white logo for a brand named Ramoliya. The logo should have a sophisticated and minimalist look with clean lines and a refined serif or modern calligraphy font. Include a simple yet memorable icon or monogram that reflects exclusivity, prestige, and high-end quality. The overall design should feel classic and premium, suitable for a luxury brand in fashion, jewelry, or lifestyle sectors.",
      title: "",
      description: "",
      tools: [],
      imageUrl: "images/ramoliya logo.webp",
    },
    {
      prompt:
        "Redesign the logo for Wings Tech, an IT Services and IT Consulting company. The new logo should keep the essence of wings symbolizing speed, agility, and innovation, but with a more modern, sleek, and minimalist look. Use a clean, professional style with a black and white or monochrome palette to convey sophistication and trustworthiness. Incorporate a contemporary sans-serif font for the text 'Wings Tech' that is bold and easily readable. The design should reflect technology, digital transformation, and consultancy professionalism while maintaining simplicity and elegance.",
      title: "",
      description: "",
      tools: [],
      imageUrl: "images/wings tech.webp",
    },
    {
      prompt:
        "A 3D-rendered poster with the phrase 'Wings Tech' in bold, dripping pink letters. The background is dark gray with abstract pink designs and splatters. The text appears to be melting, giving it a dynamic and edgy look. The overall design is modern and attention-grabbing, conveying a sense of boldness and urgency.",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/pink wings tech.webp",
    },
    {
      prompt:
        "A conceptual and artistic fashion advertisement. A small tree with bare branches growing out of a large, broken white egg shell planter. The egg has the brand name 'Monixa' written on it in bold black modern font. The branches display stylish clothing items—two fashionable jackets hanging neatly on wooden hangers and two pairs of leather shoes hanging by laces. The background is minimalistic and pure white, giving the scene a clean, elegant look. The overall composition should be surreal, high-end, and modern, suitable for a luxury fashion brand ad.",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/monixa adve.webp",
    },
    {
      prompt:
        "A modern and artistic product advertisement. A thermal receipt printer is printing a white receipt. The top of the receipt says 'NEW ORDER' in bold black font, followed by a barcode. In the center of the receipt is an image of a stylish beige T-shirt with the word 'Monixa' written across the chest in clean, black modern typography. Below the image, the text reads 'real beauty' in a simple serif font. The background is in soft beige tones, giving a minimalist and elegant look suitable for a fashion or lifestyle brand ad.",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/monixa order.webp",
    },
    {
      prompt:
        "Design a modern and minimalist logo for a brand named Netflix. The logo should be clean, geometric, and suitable for a tech startup. Use a professional color palette like shades of blue, black, and white. The design should include a simple icon or monogram that reflects innovation, connectivity, or digital transformation. The typography should be bold, sans-serif, and easily readable. The overall look should feel futuristic and premium, yet minimal.",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/netflix.webp",
    },
    {
      prompt:
        "3D typography artwork with the phrase 'Ramoliya' formed from vibrant, rainbow-colored clouds and smoke. The text is sculpted from colorful, puffy, and fluffy material that looks like dripping paint and cotton candy. Each letter is seamlessly blended into a dynamic cloud mass with a realistic, soft texture. The background is dark and moody to make the colors pop. Ultra-detailed, hyper-realistic, surreal, dreamlike composition.",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/3dramoliya.webp",
    },
    {
      prompt:
        "Create a poster with a 9:16 aspect ratio. A pill with green color leetcode on top and transparent at the bottom, featuring the printed leetcode logo. Inside the pill, include a large amount of 500+ badge. black background.",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/pill.webp",
    },
    {
      prompt:
        "A luxurious and dreamy fashion advertisement featuring an ornate golden carousel. Instead of traditional horses, the carousel has elegant brown designer T-shirt with matching blazers displayed on golden poles. The T-shirt rotate gracefully under soft sunlight in an open-air palace courtyard surrounded by vines and arches. The brand name 'MONIXA' appears at the top in gold capital letters. The atmosphere should be fairytale-like, sophisticated, and high-end, evoking luxury and fantasy.",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/monix tshirt.webp",
    },
    {
      prompt:
        "Create a trendy and eye-catching advertising graphic for Monixa T-shirts. The design should reflect modern fashion vibes with a clean and stylish look. Use bold typography featuring the brand name 'Monixa' prominently, paired with minimalist but fashionable elements like abstract shapes or subtle textures. Incorporate a color palette that matches the Monixa brand identity (neutral tones with pops of vibrant colors like coral or teal). The overall style should be youthful, fresh, and energetic to attract young fashion-conscious customers. Include a subtle call-to-action like ‘Shop Now’ or ‘Feel the Style’.",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/monixa style.webp",
    },
    {
      prompt:
        "Act as if you are an ads creative graphic designer. You need to design a social media post for an Instagram advertisement featuring a Pepsi cold drink can. The design should include be a attractive holding the Pepsi can in her hand, showcasing a sweet smile. The woman should be dressed in trekking attire, and the background should feature mountains. Additionally, the image should be hyper-realistic and in high definition.",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/pepsi.webp",
    },
    {
      prompt:
        "with a black tie, evening time arms crossed. To my right, Virat Kohli resting shoulder to shoulder with me in a black suit with a white shirt, The street is empty and dramatic. Moody lighting with a 35mm film look. Shallow depth of field, sharp focus on the three of us. Aspect ratio 9:16.",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/mevirat.webp",
    },
    {
      prompt:
        "An aerial cinematic shot of A young man 'With the same face as uploded image' leaning coolly on the hood of a red Lamborghini Aventador on a luxury car studio, wearing a oversized premium off white T-shirt underneath a maroon color varsity jacket. I Moody lighting, Photorealistic, shallow depth of field, soft warm lighting, high-resolution DSLR quality, Hasselblad X2D 100C, cinematic",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/meredcar.webp",
    },
    {
      prompt:
        "Edit this photo to place me in a Fast & Furious style scene. Keep my face and pose the same. Add a sleek, modified orange sports car (like a veilside Mazda RX-7) and In this image, I am resting my leg on the front fender, which is a part of the car's exterior. Like the pic I sent secondly. Make the background look like an urban street or garage setting, with a gritty, cinematic vibe. Don't change my face keep it same. Add shadowyfigures or people in racing gear in the background, like a street racing meet. Lightingshould be dramatic, like in the movie.Ration portrait 16:9",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/meredcar1.webp",
    },
    {
      prompt:
        "A 3D hyper-realistic miniature diorama inside a glass box with a black acrylic base, labeled 'Ramoliya Jay' in silver, with a small LED light under the label. It should feature a figure sitting relaxed with a right leg over the left thigh, on a wooden park bench, holding a cup of tea, at night, on a grass park base. Place a street lamp behind the figure, shinning downward. Make it without any background inside the glass box. Cinematic 4D rendered 8K quality, portrait view",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/3dinme.webp",
    },
    {
      prompt:
        "Transform this person into a scene from the Squid Game TV series. Keep the face exactly the same. Add a green tracksuit with a white number tag, dim indoor lighting with a dramatic and ter atmosphere, and background characters in similar outfits. Make it look like a cinematic shot from survival game show, keeping facial expression and identity unchanged!",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/meingame.webp",
    },
    {
      prompt:
        "Create a high-resolution 3D text design in the style of stacked wooden blocks. The text should read: 'LinkedIn' with each word stacked vertically like a totem pole. The letters should be bold, blocky, and appear as if they are carved from rough, aged wood with visible grain, cracks, and natural imperfections. The wood texture should look dry and slightly cracked, with a rich brown color and realistic lighting and shadows. Ensure the front face of the letters has a slightly darker tone and the sides have soft gradients to show depth. Use a warm, pastel background (like soft orange or beige) to make the 3D text pop. Maintain realistic shadows and subtle reflections to give a solid, grounded feel. Style: Photorealistic, cinematic lighting, dramatic depth, slight perspective from the bottom left.",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/wooden.webp",
    },
    {
      prompt:
        "Cinematic overhead shot of me standing still a brick city sidesalk, wearing a dark oversized blazer, motion-blurred crowd rushes past around me moody lighting 35mm film look. Shallow depth of field, sharp focus on me. Ration portrait 4:3 Keep the face same as the raw picture",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/cinematic.webp",
    },
    {
      prompt:
        "Cinematic overhead shot of me standing still a brick city sidesalk, wearing a dark oversized blazer, motion-blurred crowd rushes past around me moody lighting 35mm film look. Shallow depth of field, sharp focus on me. Ration potrait 4:3",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/cinematic1.webp",
    },
    {
      prompt:
        "A premium 'Monixa' brand T-shirt placed elegantly under a transparent glass dome with mystical purple smoke swirling inside. The T-shirt is neatly folded or displayed on a sleek stand, showcasing its stylish design and Monixa logo clearly. The background is dark and luxurious, emphasizing the glow of the smoke and the quality of the product. A hand wearing a lace glove is lifting the glass dome delicately, adding a touch of fashion and mystery to the scene. The overall mood is high-fashion, cinematic, and magical.",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/monixain.webp",
    },
    {
      prompt:
        "Ultra-realistic portrait of a confident young man wearing a dark navy oversized streetwear t-shirt with a glowing blue mandala pattern and a silver Trishul symbol at the center, black cargo pants, black sunglasses, and a silver chain. He stands casually with hands in his pockets against a clean gradient background (deep navy to sky blue), looking straight at the camera. No text or logos in the background.Use shallow depth of field. Shot on a Canon EOS R5 + RF 85mm f/1.2L lens, studio lighting, 12K resolution, cinematic editorial fashion shoot style.",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/shivme.webp",
    },
    {
      prompt:
        "A high-resolution cinematic design with a deep black background. In the center, the word 'Water' appears as if it is made of water, with realistic water textures, reflections, and light shimmer. The text should float in mid-air, semi-transparent, and glowing gently. Surrounding the text, soft white smoke drifts naturally, blending with the background, adding a dreamy and mysterious effect. The overall composition should be modern, surreal, and atmospheric — as if the word is breathing in the air.",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/water.webp",
    },
    {
      prompt:
        "Design the word Ramoliya in a bold, futuristic glass-style font on a deep black background. The letters should appear semi-transparent, with smooth, reflective glass edges. Inside the glass, infuse glowing neon blue and purple light that softly blends, giving an inner radiance. Add subtle internal glows, soft color bleeding, and realistic reflections to enhance the 3D glass effect. Apply faint, diffused shadows beneath the text to create depth and a floating sensation. The overall vibe should feel high-tech, cyberpunk, and visually striking — perfect for a modern tech or digital brand identity.",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/neonramoliya.webp",
    },
    {
      prompt:
        "Design the word 'Graphics' in highly detailed metallic chrome typography, featuring sharp edges and realistic reflections. The text should appear partially engulfed in swirling smoke and vivid orange flames, with glowing ember particles drifting around it. Add heat distortion and subtle reflections of firelight on the chrome surface to emphasize realism. The background should be a dark, gritty urban scene at night—think rain-soaked pavement, blurred city lights, and industrial textures. Add cinematic lighting with contrasting cool blue shadows and fiery warm highlights, creating a powerful, dramatic mood.",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/fire.webp",
    },
    {
      prompt:
        "A retro shot of the number 133, sculpted from translucent, jelly-like gel, floating in the air with a luminous translucent surface. The retro film grain adds an organic feel, isolated against a light background, soft and flexible in blue-grey tones.",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/133water.webp",
    },
    {
      prompt:
        "Retro shot of a letter R sculpted from soft, plush fabric, floating in midair with a red. Retro film grain adds nostalgia, isolated on a light background, cozy and ethereal --ar 9:16 --v 7 --profile z5ilm5w",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/redr.webp",
    },
    {
      prompt:
        "Design a premium tea packaging for a brand that blends ancient Gujarati tradition with futuristic elegance. The packet should feature intricate hand-drawn illustrations of a Gujarati village morning – cowbells, tulsi plants, and a copper kettle steaming on a clay stove. The color palette should combine natural earthy tones (browns, soft greens) with golden metallic foil accents to show luxury. The brand name should be embossed in a flowing, calligraphic Devanagari or Gujarati script, with subtle texture that mimics old paper or leaf veins. Add abstract steam waves rising from a tea cup, forming shapes like cultural symbols — a peacock, an old temple dome, or hands in a ‘namaste’ — to suggest warmth and cultural soul. The backside of the packet should show tea leaves falling from the sky like blessings — with hand-lettered taglines like: 'Har Chuski Ek Virasat' or 'Jya Sudhi Sugandh Chhe, Tya Sudhi Sanskar Chhe' Make the packet reusable — part of a sustainable lifestyle. Add a minimal info panel with a QR code that opens a short folk story related to chai from Gujarat.",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/tea.webp",
    },
    {
      prompt:
        "Design a tea packet and advertising poster that triggers nostalgia and emotional memories in the viewer.Split the design visually into two halves: 🔸 Left Half: A memory scene — a mother pouring chai in a steel glass in a mud house courtyard. A cow is seen in the background, radio is playing, and sunlight is falling through jali windows. This part should be slightly faded like an old photo or dream. 🔸 Right Half: Present day — a young working woman in a city apartment sipping tea on her balcony, eyes closed, same steel glass in hand. Modern life, but that same connection. In between the two halves — a golden steam trail connects them, forming shapes like a temple bell, neem leaves, or a smiling elder. Use warm orange, turmeric yellow, and deep brown tones. On top, write in hand-lettered Gujarati: 'Cha jevi biji koi yaad nathi.' Or in Hindi/English: 'Some sips take you home.' The product name Desi Dharti – Chai Bhuki should appear at the bottom with a logo that looks like it was stamped on a jute bag.",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/tea1.webp",
    },
    {
      prompt:
        "Create A hyper-realistic, three-dimensional technical sketch of a [Brand] [Car Model] appears to rise from a blueprint sheet on a wooden workshop table. The car is drawn in white ink and fine pencil lines, showcasing wireframe contours, detailed engine components, and transparent structural layers. The drawing blends seamlessly into reality, giving the illusion that the vehicle is physically emerging from the paper. Around the sheet lie mechanical tools, pencils, and markers, adding to the authentic studio environment. Professional lighting and sharp focus enhance the precision, depth, and surreal dimensional transition of the car from sketch to solid form. Aspect ratio 9:16.",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/tractor.webp",
    },
    {
      prompt:
        "Modern agricultural product packaging design, vertical standing pouch, clean and bold layout, white and orange color scheme with black accents, top section with company logo and bold product name 'Adarsh Agro', middle section showing fresh vegetables like capsicum, onion, tomato, garlic, etc., bottom text: 'Systemic - Selective - Growth Inhibitor', professional and eye-catching, high-resolution mockup on yellow gradient background, front view",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/agro.webp",
    },
    {
      prompt:
        "Create a modern, professional business card design for a wellness or health-related brand named 'Patel Agro Seeds' The card should have a clean, minimalist aesthetic with a green and white color scheme. Front Side: Use a deep green background with a subtle abstract leaf pattern. Center a clean, white leaf-inspired logo icon followed by the lowercase brand name 'Patel Agro Seeds' in a modern, rounded sans-serif font. Keep the layout simple and balanced. Back Side: Use a white background with minimal elements. Top-left: Display the same green logo followed by the word remdy in lowercase. Name: Patel Bhai — the first name in dark grey, last name in green. Website: patelagroseeds.com in small green font. Phone: 9825229766 in grey. Email: patelagroseeds@gmail.com in grey. Add a fine green line dividing the card content area neatly. The style should be crisp, elegant, and contemporary, suitable for a premium wellness or organic lifestyle brand. Use soft shadows and realistic lighting. Include a hand holding the card at the corner for a natural presentation.",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/card.webp",
    },
    {
      prompt: "Futuristic agriculture product pouch design, matte foil standing pack with elegant folds and realistic shadows, premium branding with bold product title 'Ishan Agro' in modern sans-serif font, top section includes sleek geometric logo with slogan below, dynamic color gradient (green to deep orange) representing organic farming, bottom section with icons for features (Systemic, Selective, Growth Inhibitor), fresh farm vegetables placed with shadow effect on front center (capsicum, onion, tomato, garlic), placed on a dramatic dark green-to-yellow background with soft spotlight for advertisement look, ultra-HD, front view mockup, minimalist but powerful packaging style",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/agro2.webp",
    },
    {
      prompt:
        "Visualise me as A young man wearing drop shoulder t-shirt and baggy jeans confidently leaning against my customised BMW E46 M3. The car is modified and blue and silver paintjob is done modernly street racing aesthetic. I am in a middle of a busy Phaka city road where people are rushing in motion. The style is inspired by a street racing game Need for speed.",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/mecar1.webp",
    },
    {
      prompt: "Design a professional and clean agriculture business card for 'Agro Organics'. Use earthy green and white tones with modern minimal style. Front side should display the company logo at the top (placeholder if logo not available), bold company name 'Agro Organics' in center, and below it, tagline: 'Nurturing Nature, Growing Futures.' Add an elegant leaf or crop icon watermark in the background. At the bottom, include: 📍 Ishwariya Main Rd, Madhapar, Rajkot 📞 9913744900 Back side of the card should feature a soft-focus image of green farmland or organic crops with a semi-transparent overlay. On top of that, place a slogan: 'Pure. Local. Sustainable.' with a QR code area below it. Use rounded corners, soft shadows, and a premium card layout with a modern serif or sans-serif font",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/card1.webp",
    },
    {
      prompt: "Design a premium agro company poster for 'VIBGYOR Agro Commodities Pvt Ltd'. Use a clean, corporate yet earthy design style with modern layout. Background should have a soft gradient in green, yellow, and brown tones symbolizing nature, growth, and soil. At the top center, display the company name 'VIBGYOR Agro Commodities Pvt Ltd' in bold capital letters with a professional serif or sans-serif font. Below it, include a small horizontal line or crop icon. Middle section should feature visuals of grains, spices, or agri-commodities in a semi-circle arrangement, with a realistic shadow effect. Add the company address and contact details in clean typography at the bottom: 📍 803 Time Square, Nr SBI Bank, Ayodhya Chowk, 150ft Ring Road, Rajkot 📞 0281 2970090 Use icons for map and phone next to them for modern appearance. Add a bold tagline at the bottom like: 'Delivering Quality Agro Commodities Across India.' Optionally add a QR code area on the side with 'Scan to Know More'. Use a balance of whitespace and content — elegant, eye-catching, and suitable for A3/A4 poster print or digital promo.",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/poster.webp",
    },
    {
      prompt: "Create A hyper-realistic, three-dimensional technical sketch of a Bullock cart appears to rise from a blueprint sheet on a wooden workshop table. The car is drawn in white ink and fine pencil lines, showcasing wireframe contours, detailed engine components, and transparent structural layers. The drawing blends seamlessly into reality, giving the illusion that the vehicle is physically emerging from the paper. Around the sheet lie mechanical tools, pencils, and markers, adding to the authentic studio environment. Professional lighting and sharp focus enhance the precision, depth, and surreal dimensional transition of the car from sketch to solid form. Aspect ratio 9:16.",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/gadu.webp",
    },
    {
      prompt: "Design a premium double-sided business card for an elite coaching institute. Use a dark matte navy background with gold foil accents. Front side should feature an elegant serif logo ‘New Gurukul Coaching Institute’ with the tagline ‘Where Knowledge Meets Excellence’. Use embossed texture and subtle shadows. Back side to include contact details with minimalist gold or white icons. Maintain a clean, breathable, luxury layout",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/visicard3.webp",
    },
    {
      prompt: "Create a bold and eye-catching hoarding design for New Gurukul Coaching Institute, emphasizing quality education and personal guidance. Use a modern and clean educational layout with elements like books, graduation cap, focused students, and success graph. Highlight key phrases like: 'Admission Open – 2025!' 'Specialized Coaching for Std. 8 to 12 (GSEB & CBSE)' 'Science | Commerce | Foundation Batch for NEET/JEE' '100% Concept Clarity with Expert Faculties' 'Regular Tests | Doubt Sessions | Personal Attention' ✨ Add a motivational quote at the top: 'Gyaan thi Gaurav sudhi no Safar – Start Today!' 🎨 Colors: Use educational & trust-building colors like navy blue, orange, white, and green. 📌 Include institute details clearly at the bottom: Full Address Contact Number 'Visit Us Today' or 'Enroll Now' CTA in button style 🖼 Background should have soft gradients or a subtle image of a classroom/library with transparent overlay for text readability.",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/school.webp",
    },
    {
      prompt: "A dramatic spotlight in a dark room highlights the same face as the uploaded image. The man wears a patterned white shirt with a black suit and sunglasses, exuding a confident, intense expression. His hands are in his pockets, and the lighting casts deep shadows that define the contours of his face and body. The background is black. Create a realistic image ",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/me.webp",
    },
    {
      prompt: "the center, black cargo pants, black sunglasses, and a silver chain. He stands casually with hands in his pockets against a clean gradient background (deep navy to sky blue), looking straight at the camera. No text or logos in the background. Use shallow depth of field. Shot on a Canon EOS R5 + RF 85mm f/1.2L lens, studio lighting, 12K resolution, cinematic editorial fashion shoot style.",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/me1.webp",
    },
    {
      prompt: "the number 7. The footballer has his arm around the young man's shoulder in a friendly gesture. The brightly lit stadium is packed with cheering fans, creating an electric and celebratory atmosphere under the glowing floodlights. Both individuals face the camera with relaxed and cheerful expressions, capturing a memorable moment on the pitch.",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/me2.webp",
    },
    {
      prompt: "Create a dramatic, high-contrast black-and-white portrait of the person in the uploaded image. Style the person as a strong, focused boxer wearing a fitted dark athletic t-shirt with fists wrapped in tape. Set the subject against a bold red background. Use cinematic lighting with deep shadows and strong highlights to emphasize muscle tone and facial expression. The overall mood should be intense, powerful, and artistic inspired by vintage boxing posters.",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/me3.webp",
    },
    {
      prompt: "A cinematic urban street scene with a young man leaning casually against a modified orange and black sports car (similar to Mazda RX-7). He is wearing olive cargo pants, a dark hoodie layered with a jacket, and patterned sneakers. The expression is cool and thoughtful. The background is an industrial building with muted tones and a person walking by. Shot in natural lighting with shallow depth of field. 85mm lens photography style. Realistic, movie still look. Use the uploaded image as the subject's face reference.",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/me4.webp",
    },
    {
      prompt: "Create a moody black-and-white night portrait of a me (from my selfie) sitting inside a modern black car with the door open. He should have fair skin, medium-length wavy hair, and no glasses. His expression is serious and intense. He wears a black puffer jacket and light gray sweatpants. The city skyline with glowing lights is visible in the blurred background. Soft lighting from inside the car highlights his face subtly. The overall vibe is cinematic, stylish, and introspective.",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/me5.webp",
    },
    {
      prompt: "Cinematic overhead shot of me standing still a brick city sidesalk, wearing a dark oversized blazer, motion-blurred crowd rushes past around me moody lighting 35mm film look. Shallow depth of field, sharp focus on me. Ration potrait 4:3",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/me6.webp",
    },
    {
      prompt: "Generate a black and white closeup portrait showing just the right side of the man's face, emerging from water. His skin and hair should be wet, with visible water droplets and small bubbles. Use dramatic lighting to highlight the illuminated side while leaving the other side in deep shadow. Emphasize the texture of his skin, beard stubble, and sharp eye detail. The mood should feel intense and cinematic, with a dark, minimal background.",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/me7.webp",
    },
    {
      prompt: "A cinematic portrait of a man standing against a textured wall, with golden sunlight casting dramatic shadows through window blinds across his face and body. It's lightly raining, and the soft raindrops are barely visible as they fall through the golden light. The lighting adds a warm, moody tone while the shadows create stylish lines over his face, highlighting his expression. The background remains softly blurred, emphasizing the subject's form and texture.",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/me8.webp",
    },
    {
      prompt: "A confident young man stands proudly in front of a luxurious black Toyota Fortuner, parked under dramatic lighting. He wears stylish modern streetwear — fitted T-shirt, smart trousers, and sleek sneakers. His pose is bold, arms relaxed but composed, exuding quiet confidence and success. The background includes subtle city lights or an urban vibe, with the Fortuner's headlights glowing faintly, adding to the power and elegance. The scene has a cinematic tone, with moody shadows and a hint of green ambient lighting reflecting off the car and pavement. His expression is calm, powerful — like a man who’s made it. The overall look screams style, status, and ambition, like a modern rich man with attitude.",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/me9.webp",
    },
    {
      prompt: "A stylish man standing in front of a black matte Thar SUV, wearing sunglasses, posing confidently under moody lights. He is dressed in streetwear fashion – a bold patterned sweater, cargo pants, and Nike sneakers. The background includes dramatic lighting with a cinematic tone, street-style art boards, and a hint of green underglow lighting beneath the car.",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/me10.webp",
    },
    {
      prompt: "A stylish man standing in front of a black matte Toyota Fortuner SUV, wearing sunglasses, posing confidently under moody lights. He is dressed in streetwear fashion – a bold patterned sweater, cargo pants, and Nike sneakers. The background includes dramatic lighting with a cinematic tone, street-style art boards, and a hint of green underglow lighting beneath the car.",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/me11.webp",
    },
    {
      prompt: "A confident, stylish man stands effortlessly under moody industrial ceiling lights. He wears a sleeveless sweater layered over a printed long-sleeve shirt, paired with baggy cargo pants and chunky sneakers. Black sunglasses shield his eyes, exuding a vibe that’s cool, relaxed, and fearless. The scene is lit with a dynamic blend of warm and cool tones, creating a high-fashion, urban editorial aesthetic. Cinematic color grading, deep moody shadows, and a strong sense of attitude give the image a bold, magazine-spread energy. Small watermark in the corner: prompt by: Jay Ramoliya",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/me12.webp",
    },
    {
      prompt: "A cinematic portrait of a man standing against a textured wall, with golden sunlight casting dramatic shadows through window blinds across his face and body. It's lightly raining, and the soft raindrops are barely visible as they fall through the golden light. The lighting adds a warm, moody tone while the shadows create stylish lines over his face, highlighting his expression. The background remains softly blurred, emphasizing the subject's form and texture.",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/me13.webp",
    },
    {
      prompt: "",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/.webp",
    },
    {
      prompt: "",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/.webp",
    },
    {
      prompt: "",
      title: "",
      description: "",
      tools: [],
      imageUrl: "/images/.webp",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 9;

  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const currentProjects = projects.slice(
    startIndex,
    startIndex + projectsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-portfolio-dark">
      <Navigation />

      <main className="pt-20">
        <section className="py-20 bg-portfolio-dark">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-gradient animate-fade-in">
                My Work
              </h1>
              <p
                className="text-xl text-portfolio-text-secondary max-w-3xl mx-auto animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                Explore my creative journey through prompt-driven design
                solutions. Each project showcases the power of combining
                creative briefs with innovative visual storytelling.
              </p>
            </div>

            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  {...project}
                  animationDelay={`${0.1 * index}s`}
                />
              ))}
            </div> */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  {...project}
                  animationDelay={`${0.1 * index}s`}
                />
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-12 space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-portfolio-accent text-white rounded hover:bg-opacity-80 disabled:opacity-50"
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 rounded ${
                  currentPage === page
                    ? "bg-white text-portfolio-dark font-bold"
                    : "bg-portfolio-secondary text-white hover:bg-opacity-80"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-portfolio-accent text-white rounded hover:bg-opacity-80 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Work;
