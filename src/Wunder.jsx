import React, { useState } from "react";
import { Wallet, Share2, Zap, BadgeCheck, Gem, Award } from "lucide-react";
import { motion } from "framer-motion";
import "./index.css";

export default function WunderStory() {
  const [collectedCards, setCollectedCards] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);

  const actionFigures = [
    {
      id: 1,
      name: "Web Warrior",
      image:
        "https://i.pinimg.com/736x/2e/95/0f/2e950fad67bc07083a245050e8119777.jpg",
      rarity: "rare",
      quote: "Fighting for decentralized identity",
    },
    {
      id: 2,
      name: "Token Titan",
      image:
        "https://images.unsplash.com/photo-1716961311175-6067ef8bf699?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rarity: "epic",
      quote: "Minting the future of content",
    },
    {
      id: 3,
      name: "Social Sentinel",
      image:
        "https://i.pinimg.com/736x/22/e3/8c/22e38c60e74f9f16d2ed01f29cad42da.jpg",
      rarity: "legendary",
      quote: "Protecting your digital worth",
    },
  ];

  const collectCard = (id) => {
    if (!collectedCards.includes(id)) {
      setCollectedCards([...collectedCards, id]);
    }
  };

  return (
    <div className="min-h-screen bg-[#0e0e10] text-white font-sans px-4 py-10 md:px-6 md:py-12">
      {/* Floating Action Figures */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {[1, 2, 3, 4, 5].map((i) => (
          <motion.img
            key={i}
            src={`/action_figures/action_figure,${i}.jpg`}
            alt="Floating action figure"
            className="absolute opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 50 + 30}px`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              rotate: [0, Math.random() * 360],
            }}
            transition={{
              duration: Math.random() * 30 + 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="max-w-3xl mx-auto space-y-10 relative z-10">
        {/* Header with 3D Effect */}
        <motion.div
          className="flex justify-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <a
            href="https://www.wunder.social/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.img
              src="https://media.licdn.com/dms/image/v2/D4E0BAQGQIgLAoeD0TQ/company-logo_200_200/company-logo_200_200/0/1730284090707/wunder_social_logo?e=2147483647&v=beta&t=2IH-MI_YAzaX_iyIBXZe7hE5W3vckpMfSaoef3P3o-E"
              alt="Wunder Logo"
              className="h-12 md:h-16 hover:rotate-[15deg] transition-transform duration-300"
              whileHover={{ rotate: 15 }}
            />
          </a>
        </motion.div>

        {/* 3D Title with Action Figure Badge */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 className="font-orbitron text-4xl md:text-5xl font-bold text-center text-[#f4b731]">
            Why Wunder is the Future
          </motion.h1>
          <motion.div
            className="absolute -top-4 -right-4"
            animate={{
              rotate: [0, 10, -10, 0],
              y: [0, -5, 5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1676811811733-4b1ae14afdf9?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Collectible badge"
              className="w-12 h-12 rounded-full border-2 border-[#f4b731] shadow-lg"
            />
          </motion.div>
        </motion.div>

        {/* Action Figure Collection Section */}
        <motion.section
          className="bg-gray-900/50 p-6 rounded-2xl border border-gray-700 shadow-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Zap className="text-[#f4b731]" />
            <h2 className="font-kanit text-4xl font-bold">
              Collect Wunder Action Figures
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {actionFigures.map((figure) => (
              <motion.div
                key={figure.id}
                className={`font-orbitron relative rounded-xl overflow-hidden border-2 ${
                  figure.rarity === "rare"
                    ? "border-blue-400"
                    : figure.rarity === "epic"
                    ? "border-purple-400"
                    : "border-yellow-400"
                } ${
                  collectedCards.includes(figure.id)
                    ? ""
                    : "grayscale brightness-50"
                }`}
                whileHover={{ y: -5 }}
                onMouseEnter={() => setHoveredCard(figure.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => collectCard(figure.id)}
              >
                <img
                  src={figure.image}
                  alt={figure.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-3 bg-gray-800/80 backdrop-blur-sm">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold">{figure.name}</h3>
                    {figure.rarity === "rare" && (
                      <span className="text-xs bg-blue-500 px-2 py-1 rounded">
                        RARE
                      </span>
                    )}
                    {figure.rarity === "epic" && (
                      <span className="text-xs bg-purple-500 px-2 py-1 rounded">
                        EPIC
                      </span>
                    )}
                    {figure.rarity === "legendary" && (
                      <span className="text-xs bg-yellow-500 px-2 py-1 rounded">
                        LEGENDARY
                      </span>
                    )}
                  </div>
                  {hoveredCard === figure.id && (
                    <motion.p
                      className="text-xs mt-1 text-gray-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {figure.quote}
                    </motion.p>
                  )}
                </div>
                {!collectedCards.includes(figure.id) && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                    <p className="text-sm font-bold animate-pulse">
                      Click to collect!
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Story Sections with Action Figure Themes */}
        <section className="space-y-12 text-gray-200">
          {[
            {
              image:
                "https://i.pinimg.com/736x/2e/95/0f/2e950fad67bc07083a245050e8119777.jpg",
              text: "Years ago, we believed the internet would connect us. Then came the platforms, gatekeepers, algorithms, noise, bots. We lost control. But now, we're taking it back.",
              figure: "Web Warrior",
              visual:
                "https://pbs.twimg.com/media/GrTrfU5W4AEdbxJ?format=jpg&name=large",
            },
            {
              image:
                "https://images.unsplash.com/photo-1716961311175-6067ef8bf699?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              text: "I've spent years on Web2 social media. It gave me followers, likes, even some clout. But I never owned anything. Every post made the platforms richer, not ME.",
              figure: "Token Titan",
              visual:
                "https://plus.unsplash.com/premium_photo-1661538083597-59d789b99d19?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              image:
                "https://images.unsplash.com/photo-1716961311175-6067ef8bf699?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              text: "Then came Wunder.Social, a platform that flips the script. Here, my content is mine. My identity is verified. Bots are gone. The noise is replaced with real people, real value.",
              figure: "Social Sentinel",
              visual:
                "https://pbs.twimg.com/media/GrTrhk4XIAAdARX?format=jpg&name=large",
            },
            {
              image:
                "https://images.unsplash.com/photo-1716961311175-6067ef8bf699?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              text: "I can mint my posts. Get rewarded for engagement. Share in the platform's revenue. Finally, my digital life is an asset—not a product.",
              figure: "Token Titan",
              visual:
                "https://pbs.twimg.com/media/GrAw1cPXEAA8de7?format=jpg&name=large",
            },
            {
              image:
                "https://i.pinimg.com/736x/2e/95/0f/2e950fad67bc07083a245050e8119777.jpg",
              text: "Wunder isn't theory. It's funded. It's shipping. Backed by $50M. Ex-TikTok talent. Built-in wallet, tokenized content, and AI curation. This isn't a pitch. It's a revolution.",
              figure: "Web Warrior",
              visual:
                "https://pbs.twimg.com/media/GqxEfW4WIAAjYGP?format=jpg&name=large",
            },
            {
              image:
                "https://i.pinimg.com/736x/22/e3/8c/22e38c60e74f9f16d2ed01f29cad42da.jpg",
              text: "This site is my personal tribute to a platform that actually gives a damn about users. If you're reading this, maybe it's your sign to stop being a product—and start being a stakeholder.",
              figure: "Social Sentinel",
              visual:
                "https://pbs.twimg.com/media/GrTrhk4XIAAdARX?format=jpg&name=large",
            },
          ].map((item, idx) => (
            <motion.div
              className="space-y-4 bg-gray-900/50 p-6 rounded-2xl border border-gray-700 shadow-lg"
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="flex items-start gap-3">
                <img
                  src={`${item.image}`}
                  alt={item.figure}
                  className="w-10 h-10 rounded-full border border-[#f4b731]"
                />
                <div>
                  <p className="font-kanit font-bold text-[#f4b731]">
                    {item.figure}
                  </p>
                  <p className="font-wunder">{item.text}</p>
                </div>
              </div>
              <img
                src={`${item.visual}`}
                alt="Visual"
                className="w-full max-h-[300px] object-cover rounded-xl shadow-md border border-gray-600"
              />
            </motion.div>
          ))}

          {/* Enhanced CTA with 3D Button */}
          <motion.div
            className="text-center mt-16"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.a
              href="https://www.wunder.social/claim-your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-[#f4b731] to-[#f4d731] text-black font-bold px-8 py-4 rounded-2xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
              whileHover={{ y: -3 }}
            >
              <span className="font-orbitron relative z-10 flex items-center gap-2">
                <Gem className="w-5 h-5" />
                Claim your Username!
              </span>
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </motion.a>
          </motion.div>

          {/* Social Links with Hover Effects */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                icon: "🌐",
                label: "Website",
                url: "https://www.wunder.social",
              },
              {
                icon: "🐦",
                label: "X (Twitter)",
                url: "https://x.com/wunder_social",
              },
              {
                icon: "📸",
                label: "Instagram",
                url: "https://instagram.com/wunder.social",
              },
              {
                icon: "🗣️",
                label: "Telegram",
                url: "https://t.me/wundersocial",
              },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 font-kanit hover:bg-gray-800 border border-gray-700 rounded-xl p-4 text-center transition-all duration-300 hover:border-[#f4b731] group"
                whileHover={{ y: -3 }}
              >
                <span className="text-2xl block mb-2 group-hover:text-[#f4b731] transition-colors">
                  {social.icon}
                </span>
                <span className="font-medium">{social.label}</span>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Footer with Animated Collectible Counter */}
        <motion.footer
          className="mt-16 border-t border-gray-800 pt-10 space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col items-center gap-4">
            <motion.div
              className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full border border-gray-600"
              animate={{
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 0 0 0 rgba(244, 183, 49, 0)",
                  "0 0 0 4px rgba(244, 183, 49, 0.3)",
                  "0 0 0 0 rgba(244, 183, 49, 0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <Award className="text-[#f4b731]" />
              <span className="font-mono">
                Collected: {collectedCards.length}/3 Action Figures
              </span>
            </motion.div>

            <button className="font-kanit inline-flex items-center gap-2 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white px-6 py-3 rounded-xl shadow-inner border border-gray-600 transition-all hover:scale-105 cursor-pointer">
              <Wallet className="w-5 h-5" /> Connect Wallet (Coming Soon)
            </button>
          </div>

          <div className="font-kanit text-center text-gray-500 text-sm">
            Want to mint this story as an NFT?{" "}
            <span className="text-[#f4b731] font-medium">Coming soon.</span>
          </div>

          <div className="font-kanit text-center pt-6 border-t border-gray-800">
            <p className="text-sm text-gray-400">
              Made with ❤️ by{" "}
              <a
                href="http://x.com/PrinceWarexy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                PrinceWarexy
              </a>
            </p>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}
