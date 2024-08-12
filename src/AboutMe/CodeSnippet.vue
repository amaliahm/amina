<script setup>

import { ref } from "vue";

import Snippet from "./Snippet.vue";

const data = [
  {
    code: `
    function Login() {
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');

        // State variable to handle any error messages
        const [error, setError] = useState('');

        // Handler function to update the username state when the user types in the input
        const handleUsernameChange = (e) => {
          setUsername(e.target.value);
        };

        // Handler function to update the password state when the user types in the input
        const handlePasswordChange = (e) => {
          setPassword(e.target.value);
        };

        // Function to handle form submission
        const handleSubmit = (e) => {
          e.preventDefault();
      
        // Simple validation: check if username and password are not empty
         if (!username || !password) {
           setError('Username and password are required');
           return;
         }

         // Clear any previous error messages
         setError('');

         // Mock API call to login
         const mockAPIResponse = mockLoginAPI(username, password);

        // Check if the login was successful
        if (mockAPIResponse.success) {
          // Redirect the user to the home page
        } else {
          // Set an error message if the login failed
          setError(mockAPIResponse.message);
        }
    };

    // Mock function to simulate an API call for logging in
    const mockLoginAPI = (username, password) => {
      // Example: check if the username and password match hardcoded values
      if (username === 'user' && password === 'password') {
        return { success: true };
      } else {
        return { success: false, message: 'Invalid username or password' };
      }
    };
    `,
    details:
      "This code snippet is a basic implementation to Login function using Reactjs.",
  },
  {
    code: `
    const EventEmitter = require('node:events');
    class MyEmitter extends EventEmitter {}
    const myEmitter = new MyEmitter();
    myEmitter.emit('error', new Error('whoops!'));
    // Throws and crashes Node.js
    `,
    details:
      "In this code snippet, i'm using the EventEmitter class from Node.js to create a custom event emitter and emit an error event.",
  },
  {
    code: `
    const { data, error } = await supabase
    .from("conversation_sessions")
    .select(
        "id, user1_id, user2_id, users AS usersU1:user1_id(name), users AS usersU2:user2_id(name)"
    )
    .or(\`user1_id.eq.${user.value.id}, user2_id.eq.${user.value.id}\`);

    const formatData = data?.map((ele: UserConversationSession, ind: number) => {
    const sessionID = ele.id;
    const otherUserID = ele.user1_id === user.value?.id ? ele.user2_id : ele.user1_id;
    const otherUserName = ele.user1_id === user.value?.id
        ? ele.usersASusersU2.name
        : ele.usersASusersU1.name;

        return { sessionID, otherUserID, otherUserName };
    });
    `,
    details:
      "This code snippet demonstrates how to handle and display chat messages between two users. It retrieves the messages from a database, categorizes them based on the sender, and renders them on different sides of the chatbox based on who sent each message.",
  },
  {
    code: ` FirebaseMessaging messaging = FirebaseMessaging.instance;

    NotificationSettings settings = await messaging.requestPermission(
        alert: true,
        announcement: false,
        badge: true,
        carPlay: false,
        criticalAlert: false,
        provisional: false,
        sound: true,
    );

    print('User granted permission: ${settings.authorizationStatus}');
    `,
    details:
      "This code snippet is used to request permission from the user to receive push notifications in a Flutter app using Firebase Cloud Messaging (FCM).",
  },
  {
    code: `final usersQuery = FirebaseFirestore.instance.collection('users').orderBy('name');

    FirestoreListView<Map<String, dynamic>>(
        query: usersQuery,
        itemBuilder: (context, snapshot) {
            Map<String, dynamic> user = snapshot.data();

            return Text('User name is ${user['name']}');
        },
    );`,
    details:
      "This code snippet is for displaying a list of users from a Firestore collection in a Flutter app using the cloud_firestore package along with the firestore_ui package.",
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
