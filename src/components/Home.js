import React from "react"
import { motion } from "framer-motion"
import { ReactComponent as SVG} from '../data/assets/anim.svg'
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react'

import NavBar from "./NavBar"
import Title from "./Title"
import Skills from "./Skills"

const Home = (props) => {

const {skills} = props

    return (
      <div  className="home">
        <NavBar />
        
        <section className="home-slide-1">

        <div className="title-wrap">

        <div className="svg-wrap">
          <SVG className="svg" />
        </div>
        <motion.div 
        initial={{opacity: 0, x:10, y:10}} 
        animate={{opacity: 1, x:0, y:0} }
        transition={{duration: 1}}
        className="title">
        <motion.h1
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: .2,
          duration: 1
        }}
        className="WebTitle">Full Stack Web Developer</motion.h1>
        <Swiper
        spaceBetween={50}
        slidesPerView={1}
        direction={"vertical"}
        modules={[Autoplay, Pagination, Navigation]}
        centeredSlides={true}
        autoplay= {{
          delay:3000,
          disableOnInteraction:false
        }}
        className='swiper'
        >
          {
            skills.map(skill => { return <SwiperSlide className="swipe-slide" key={skill.id}>{skill.skillName}</SwiperSlide>
            })
          }

        </Swiper>
         </motion.div>
        </div>
        </section>
        
        <section className="spacer"></section>
      </div>
    )
  }
export default Home  