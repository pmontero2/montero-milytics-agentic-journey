import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
}

export const ScrollReveal = ({
    children,
    width = "100%",
    delay = 0,
    direction = "up"
}: ScrollRevealProps) => {
    const getDirectionOffset = () => {
        switch (direction) {
            case "up": return { y: 60, x: 0 };
            case "down": return { y: -60, x: 0 };
            case "left": return { x: 60, y: 0 };
            case "right": return { x: -60, y: 0 };
            default: return { y: 60, x: 0 };
        }
    };

    return (
        <div style={{ position: "relative", width }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, scale: 0.95, ...getDirectionOffset() },
                    visible: { opacity: 1, scale: 1, x: 0, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                    type: "spring",
                    stiffness: 60,
                    damping: 15,
                    mass: 0.8,
                    delay: delay,
                }}
            >
                {children}
            </motion.div>
        </div>
    );
};
