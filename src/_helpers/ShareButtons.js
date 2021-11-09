import React from 'react'
import {
    FacebookShareButton,
    TelegramShareButton,
    LinkedinShareButton,

    WhatsappShareButton, TwitterShareButton
} from "react-share";
import {SHARE_LINK_BLOG,SHARE_LINK_PORTFOLIO} from "./params";

const ShareButtons = (props) => {
    const slug = props.slug
    const title = props.title
    let urlTo = ""
    const twitterHashtag = ['#HassanPIOU']


    if (props.type === 'blog'){
        urlTo = SHARE_LINK_BLOG+slug
    }else{
        urlTo = SHARE_LINK_PORTFOLIO+slug
    }

    return (

         <>
             <ul className="list-inline">
                 <li>
                     <FacebookShareButton
                         url={urlTo}
                         quote={title}
                         hashtag="#HassanPIOU"
                     >
                         <a href="#facebook">
                             <i className="fab fa-facebook-f"></i>
                         </a>
                     </FacebookShareButton>

                 </li>
                 <li>
                     <TwitterShareButton
                         hashtags={twitterHashtag}
                         url={urlTo}
                     >
                         <a href="#twitter">
                             <i className="fab fa-twitter"></i>
                         </a>
                     </TwitterShareButton>

                 </li>
                 <li>
                     <TelegramShareButton
                         title={title}
                         url={urlTo}
                     >
                         <a href="#telegram">
                             <i className="fab fa-telegram "></i>
                         </a>
                     </TelegramShareButton>
                 </li>
                 <li>
                     <LinkedinShareButton
                         title={title}
                         url={urlTo}
                     >
                         <a href="#linkedin">
                             <i className="fab fa-linkedin-in"></i>
                         </a>
                     </LinkedinShareButton>
                 </li>
                 <li>
                     <WhatsappShareButton
                         title={title}
                         url={urlTo}
                     >
                         <a  href="#whatsapp">
                             <i className="fab fa-whatsapp "></i>
                         </a>
                     </WhatsappShareButton>

                 </li>
             </ul>


             {/*<FacebookMessengerShareButton*/}
             {/*>*/}
                 {/*<FacebookMessengerIcon size={36}  round={true} />*/}
             {/*</FacebookMessengerShareButton>*/}


         </>

    )
}

export default ShareButtons