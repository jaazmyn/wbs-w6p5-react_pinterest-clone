import { unstable_concurrentAct } from "react-dom/cjs/react-dom-test-utils.development";
import { useParams } from "react-router-dom";
import React, { useEffect } from "react";

export default function ViewUser() {
  //Prop = name
  //Looking for a specific user: https://cdn.contentful.com/spaces/wwsh9kp1nfrc/environments/master/entries?access_token=6JzF_q1CD1Htat5n-3DjPBwGuw5B1lbevCKfiqogqX4&content_type=post&fields.user.sys.id=4WpLfOWGSLrrKs8jPLw3yt
  /*     const { id } = useParams();
    const avatar = user.fields.avatarLink
    const userName = user.fields.name
    const userId = user.fields.user.sys.id
    const posts = []
    const userPosts = []
    const url = `${process.env.REACT_APP_API_ENDPOINT}?access_token=${process.env.REACT_APP_API_KEY}`

    const getUserPosts = () => {
        axios
      .get(url)
      .then((res) => {
        console.log(res.data.items);
        res.data.items.map((iteration, index) => {
          if (iteration.fields.title !== undefined) posts.push(iteration);
        });
        posts.map((iteration, index) => {
          if (iteration.fields.user.sys.id === userId)
            userPosts.push(iteration);
        });
        console.log(posts);
        console.log(userPosts);
      })
      .catch((er) => console.log(er));
  };
    }

    useEffect(()=> getUserPosts(),[]) */

  return (
    <div>
      {/* <img src={avatar} alt="avatar"/>
        <p>{userName}</p>
        <PostGrid userPosts={userPosts}/> */}
    </div>
  );
}
