
const M = "https://puppy.instabizweb.com/media/";
const r = [
["maltipoo-max-male","Max","Maltipoo","boy","3 months",1,"Z0ToauDx7Eve/5fffe4d022/b942a5_4b8cfb8204d24eadaf524332aba1dc15-mv2.webp"],
["korean-teacup-maltipoo-female","Korean Teacup Maltipoo","Maltipoo","girl","2 months",1,"gAaGwoGej2g6/5523e884dd/b942a5_50f0ae67c9ff437d911597d52a9e63b3-mv2.jpg"],
["korean-teacup-poodle-female","Korean Teacup Poodle","Poodle","girl","2 months",0,"xeMJCapr5vcU/e618c653b2/b942a5_14376a216177484dbbb27995d0f6aeb7-mv2.jpg"],
["maltipoo-cavapoo-male","Maltipoo & Cavapoo","Cavapoo","boy","3 months Maltipoo & 2 months Cavapoo",1,"YQhey4j7uWvZ/3ea10db6c1/b942a5_7ce7e7bd18424b6c8fb16dd30113ade2-mv2.jpg"],
["toy-poodle-male-female","Toy Poodle","Poodle","boy & girl","2 months",0,"vMu0BPvkAZ-j/c65e53967d/b942a5_0b2c0c0d178c4005acbe28725a5ea573-mv2.jpg"],
["maltipoo-female-2","Maltipoo","Maltipoo","girl","3 months",1,"3WJNmn6VVgVu/732f779474/b942a5_2b5dcece361b4589890ae920c66a1b70-mv2.jpg"],
["pomeranian-female","Pomeranian","Pomeranian","girl","3 months",0,"3yOfnmoyPooH/81e0c7e00c/b942a5_556841b9a73942e5a9d782a683f3bc68-mv2.jpg"],
["copper-male","Copper","Cavapoo","boy","2 months",0,"O-6w4FYqE10j/be76f399cc/b942a5_bb73ebbb952047988f944f3a8e3052bd-mv2.jpg"],
["shitzu-female","Shih Tzu","Shih Tzu","girl","2 months",0,"qNrTCSrsYyzY/168fa8c4ff/b942a5_eb14616c76c24da89afe7fa3b7d7ae6a-mv2.jpeg"],
["shitzu-male","Shih Tzu","Shih Tzu","boy","2 months",0,"crgs9ih6as_M/e37bafb1bf/b942a5_344e49c6c34940d2b09a3ddd5c2e3234-mv2.jpg"],
["maltipoo-female-1","Maltipoo","Maltipoo","girl","2.5 months",0,"wNm2_VIBEQvK/4b68f59e75/b942a5_7dd33c9b78c04f78a6a1c7386fb55620-mv2.jpg"],
["maltipoo-female","Maltipoo","Maltipoo","girl","2 months",0,"lMhASnmIIVQ4/ad2353ad31/b942a5_6a5617708d75408b8f73725080ed0149-mv2.jpg"],
["korean-teacup-pomeranian-1","Korean Teacup Pomeranian","Pomeranian","girl","2 months",0,"EsAq2LSRvVCJ/4d553ed044/b942a5_a8d264c1aa754d80bc7c98917dfd1fda-mv2.jpg"],
["korean-teacup-pomeranian","Korean Teacup Pomeranian","Pomeranian","girl","2 months",0,"vzf7P8SPCZ-Q/a8db4ee114/b942a5_967bb346583b4146acb56607f5da5f21-mv2.jpg"],
["korean-teacup-pomeranian-male","Korean Teacup Pomeranian","Pomeranian","boy","2 months",0,"nZTGFv46hrZI/fb9eeefc9c/b942a5_dcb8eb174915463ea0c40c58b7b0e406-mv2.jpg"],
];
export const puppies = r.map(([slug,name,breed,gender,age,video,p]) => ({
  slug, name, breed, gender, age, video: !!video, img: M + p,
  origin: name.startsWith("Korean") ? "imported" : "local",
}));
export const breeds = ["Maltipoo","Pomeranian","Poodle","Cavapoo","Shih Tzu"];
export const WA = "https://wa.me/919898124987?text=Hi%20TeddyPups%2C%20I%27d%20like%20to%20know%20more%20about%20your%20puppies.";
export const steps = [
 ["Choose your breed","Select your preferred breed or tell us what you're looking for. We'll guide you based on availability and your lifestyle."],
 ["Get photos & details","Our team will share real photos, health details, and all necessary information directly on WhatsApp."],
 ["Secure & safe delivery","Once confirmed, we handle everything professionally and ensure your puppy reaches you safely and stress-free."]];
export const trust = [
 ["Vet-checked & healthy","Every puppy comes vaccinated, dewormed, and with a verified health certificate."],
 ["Korea to Dubai, safely","Trusted breeders, safe travel, and premium care from start to finish."],
 ["Support 24/7","Always here to help, from choosing your puppy to post-delivery support."],
 ["Trusted by families worldwide","Puppies delivered to loving homes all around the world."]];
export const faqs = [
 ["Are your puppies vaccinated and health-checked?","Yes. All our puppies come with a verified health certificate from licensed vets. Every puppy is vaccinated, dewormed, and thoroughly checked before joining your family."],
 ["Can I meet a puppy before I decide?","Yes. Come meet our locally available puppies in our Downtown Dubai showroom and spend time bonding before making your decision."],
 ["Can I take my puppy home the same day?","Local puppies are available immediately, so you can take your puppy home the same day."]];
const F = "https://puppy.instabizweb.com/media/";
export const families = [
 ["dI8Jv0KRTiLJ/d2d7e5375b/27b888_7d940ce5701f48d98327e4a242b53ac4-mv2.jpg","Lulu with her new mummy"],
 ["TI-WtaFssfQt/c41fb2a387/27b888_15920f828b864dd1b44b98ec4e964c53-mv2.jpg","Adorable Maltipoo baby"],
 ["j6T9eswP2eS8/59c6879a1d/27b888_bc27df54dcce410196c6016475364ff3-mv2.jpg","My new teddy puppy"],
 ["HJgL4rRnmReV/533701358f/27b888_082e47dfd8144423a96dc70d966fa5b2-mv2.jpg","Our new puppies"],
 ["uc5ANs5jm7r7/7160d8b7b1/27b888_f7f4966e59e94db591784d4ec546682f-mv2.jpg","New puppy"],
 ["pRJubyqHw8p7/d58c4c07ee/27b888_b073c5815f7c4f92ad9a57741a653663-mv2.jpg","Gang of 3"],
 ["4wOJk9azop_-/65ecf66bf0/27b888_cfe895dbcc2d4bff85f890be9b496543-mv2.jpg","So happy"],
 ["3h20rIasJCOa/10c307cb1c/27b888_a7e7ab6a931e4c79a798bab9927d396e-mv2.jpg","New pup"]
].map(([p,c]) => ({ img: F + p, caption: c }));
export const showroomImg = F + "FHyoHcIosLZE/60f6e7e00a/27b888_323008bb0f6a41d4bde2a0da7206cd98f000.jpg";
