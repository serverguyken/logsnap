<template>
    <div>
        <editor
       api-key="zeaxm8szjm9fw11vnxap5wcbakczkfuo8ztcknjz3mdvma0l"
       :init="{
           init_instance_callback : function(editor) {
    var freeTiny = document.querySelector('.tox .tox-notification--in');
   freeTiny.style.display = 'none';
  },
         height: 500,
         menubar: false,
         plugins: [
           'advlist autolink lists link image charmap print preview anchor',
           'searchreplace visualblocks code fullscreen',
           'insertdatetime media table paste code help wordcount'
         ],
         toolbar:
           'undo redo | formatselect | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist outdent indent | removeformat | help'
       }"
     />
    </div>
</template>
<script>
import Editor from '@tinymce/tinymce-vue'
export default {
    name: Editor
}
</script>
<style lang="">
    
</style>