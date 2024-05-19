//@ts-nocheck
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavMobileMenuStore } from "./components/useNavMobileMenuStore";
import NavMobileMenuArea from "./components/NavMobileMenuArea";
import { ExpandCircle } from "@/app/lib/animations";

export default function NavMobile(props: any) {

  const menuRef = useRef<HTMLElement>(null);


  return (
    <motion.aside
      ref={menuRef}
      tabIndex="0"  
      className="hidden-scrollbar bg-purple1 fixed top-0 min-h-dvh w-full gap-20 overflow-y-scroll pb-20 lg:pb-0 h-screen left-0 right-0 z-[9999] flex flex-col overflow-hidden "
      variants={ExpandCircle}
      exit={{
        ...ExpandCircle.closed,
        transitionEnd: {
          // display: 'none',
          opacity: 0,
        },
      }}
      animate={
        props?.isOpen
          ? {
              ...ExpandCircle.open(),
              opacity: 1,
            }
          : {
              ...ExpandCircle.closed,
              transitionEnd: {
                // display: 'none',
                opacity: 0,
              },
            }
      }
      initial={{
        ...ExpandCircle.closed,
        transitionEnd: {
          // display: 'none',
          opacity: 0,
        },
      }}
    >
      <NavMobileMenuArea data={props?.data}/>
    
    </motion.aside>
  );
}
// const Root = styled(motion.aside, {
//   // gap:"px",
//   height: "100svh",
//   position: "fixed",
//   overflowY: "auto",
//   // minHeight: "100svh",
//   top: 0,
//   left: 0,
//   right: 0,
//   // bottom: "0px",
//   width: "100%",
//   zIndex: "9999",
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "space-between",

// });
