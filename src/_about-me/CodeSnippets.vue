<script setup>

import { ref } from "vue";
import Snippet from "./Snippet.vue";

const data = [
  {
    code: `   useMotionValueEvent(scrollY, "change", (latest) 
    => {
    const scrollPos = window.scrollY;
    const differencePos =
      (containerRef.current.offsetTop - scrollPos) /
      containerRef.current.offsetTop;
    const differencePosPercentage = differencePos 
    * 100;

    setGap(differencePosPercentage);

    // Setting opacity for child elements in Children
    // components
    if (gap >= 0) {
      const calcOpacity = scrollY.get() /
       containerRef.current.offsetTop;
      if (calcOpacity > 0.15) {
        setContentOpacity(calcOpacity);
      } else {
        setContentOpacity(0);
      }
    }
    });`,
    details:
      "This code snippet is used for the three sections that translate upwards depending with variables magnitudes. It did take a little thinking to come up with this and eliminate the margin of errors.",
  },
  {
    code: `  const [posY, setPosY] = useState(0);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest)
     => {
      console.log(scrollY);
      setPosY(latest * 0.2);
    });`,
    details:
      "A snippet from the agency website - About Us page where I create a projected shadow effect using this little piece of code.",
  },
  {
    code: `// Setting up the subscription
    supabase
      .channel("any")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "tasks",
          filter: 
          \`project_id=eq.\${project.project_id}\`,
        },
        async (payload) => {
          // Adding the task to the existing array 
          // of tasks
          const { data, error } = await supabase
            .from("users")
            .select("name")
            .eq("id", user.id);

          // If incase task editing occurs, we will
          // remove that respective task from the 
          // array 
          // and add the new payload to the
          // array`,
    details:
      "The subscription code of my Kanban Ticketing System where I use a single subscriber to fetch tasks of different categories and eliminate additional API cals and network dependencies.",
  },
  {
    code: ` const { data, error } = await supabase
    .from("conversation_sessions")
    .select(
      "id, user1_id, user2_id, users AS 
      usersU1:user1_id
      (name), users AS usersU2:user2_id(name)"
    )
    .or(\`user1_id.eq.\${user.value.id}, 
    user2_id.eq.\${user.value.id}\`);

    const formatData = data?.map((ele:
      UserConversationSession, ind: number) => {
      const sessionID = ele.id;
      const otherUserID =
        ele.user1_id == user.value?.id ?
         ele.user2_id : ele.user1_id;
      const otherUserName =
        ele.user1_id == user.value?.id
          ? ele.usersASusersU2.name
          : ele.usersASusersU1.name;

      return { sessionID, otherUserID, otherUserName 
      };
    });
    `,
    details:
      "This is the code snippet shows the way I handled data from the database to get the chatbox messages between two users and seperate them into different categories, thus rendering up on different sides in the chatbox.",
  },
  {
    code: `//  Get the message value
    const message = inputMessage.value;
    // Reset the message bar
    inputMessage.value = "";

    // Resetting the message bar first 
    // because we don't want the user
    // to wait for the message to go

    // Add the message to the database
    const { error } = 
    await supabase.from("messages").insert({
      message,
      receiver_id: userObject.otherUserID,
      sender_id: user.value.id,
      session_id: userObject.sessionID,
    }); `,
    details:
      "This code snippet shows the logic behind the process of when the user sends a message. This code snippet is taken from the Nuxt Chat App project.",
  },
];

const divRef = ref();

function scrollToDetails(detailBoxRef, index) {
  if (index !== 4) {
    divRef.value.scrollTo({
      top: detailBoxRef.value.offsetTop - 100,
      behavior: "smooth",
    });
  } else {
    setTimeout(() => {
      divRef.value.scrollTo({
        top: detailBoxRef.value.offsetTop,
        behavior: "smooth",
      });
    }, 700);
  }
}

</script>

<template>

  <div 
    class="relative lg:col-span-4 flex flex-col lg:px-3 py-4"
  >
    <div
      ref="divRef"
      class="w-full h-full lg:absolute top-0 left-0 overflow-y-auto pt-6 pb-12"
    >
      <p class="text-[#607B96] pl-6">
        // Code snippets showcase:
      </p>
      <Snippet
        :key="ele"
        v-for="(ele, ind) in data"
        :index="ind"
        :codeText="ele.code"
        :details="ele.details"
        :scrollOnOpen="scrollToDetails"
      />
    </div>
  </div>
  
</template>
