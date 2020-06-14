<template>
  <li class="item">
    <div class="user-box">
      <div class="avatar" :style="'background-image: url('+currentUser.photoURL+')'"></div>
      <p class="user-name">{{currentUser.displayName}}</p>
    </div>
    <div class="editor">
      <textarea placeholder="new post" v-model="newPost" @keypress.enter="createPost">
      </textarea>
      <p class="message">Press Enter to Post</p>
    </div>
  </li>
</template>

<script>
import { db } from '../main'

export default {
  props: ['currentUser'],
  data () {
    return {
      newPost: ''
    }
  },
  methods: {
    createPost () {
      const date = new Date()
      db.collection('posts').add({
        'content': this.newPost,
        'date': date,
        'uid': this.$props.currentUser.uid
      })
      .then(
        this.newPost = ''
      )
    }
  }
}
</script>