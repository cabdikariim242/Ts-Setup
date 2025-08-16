  <template>
    <div class="w-full">
      <p class="text-white mr-[80px] lg:flex md:hidden hidden"><strong>Buttons</strong> . Explore the versatility of our Buttons component for enhancing user interactions on your application.
</p>

<!-- Basic Buttons -->

   <BaseCard>
    <h1 class="font-bold text-xl mb-4">Basic Buttons</h1>
    <hr class="my-4 border-t-2 border-gray-300 lg:flex md:flex hidden" />
    <p class="lg:flex md:flex hidden">Buttons are fundamental elements in web and app design, allowing users to interact with your content and perform actions. The Basic Buttons component provides a range of button styles that you can easily incorporate into your project. These buttons come in various color variants to suit your design needs.</p>
    <hr class="my-4 border-t-2 border-gray-300 lg:flex md:flex hidden" />
    <div class="flex flex-wrap items-center gap-2 mt-6 border border-gray-200 p-2">
      <AppButton :customClass="'p-3 bg-blue-900 text-white hover:bg-blue-800 focus:outline-none focus:ring border'">Primary</AppButton>
      <AppButton :customClass="'p-3 bg-gray-100 text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring border'">Secondary</AppButton>
      <AppButton :customClass="'p-3 bg-teal-600 text-white hover:bg-teal-700 focus:outline-none focus:ring border'">Success</AppButton>
      <AppButton :customClass="'p-3 bg-yellow-600 text-black hover:bg-yellow-700 focus:outline-none focus:ring border'">Warning</AppButton>
      <AppButton :customClass="'p-3 bg-orange-600 text-white hover:bg-orange-700 focus:outline-none focus:ring border'">Pending</AppButton>
      <AppButton :customClass="'p-3 bg-red-600 text-white hover:bg-red-700 focus:outline-none focus:ring border'">Danger</AppButton>
      <AppButton :customClass="'p-3 bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:ring border'">Dark</AppButton>
    </div>
  </BaseCard>

<!-- Button Sizes -->

   <BaseCard>
    <h1 class="font-bold text-xl mb-4">Button Sizes</h1>
    <hr class="my-4 border-t-2 border-gray-300 lg:flex md:flex hidden" />
        <p class="lg:flex md:flex hidden">The Button Sizes component allows you to adjust the size of buttons to match your design requirements. Whether you need small, medium, or large buttons, this feature ensures that your buttons fit seamlessly within your user interface.</p>
    <div class="flex flex-wrap items-center gap-2 mt-4 border border-gray-200 p-2">
      <AppButton :customClass="'bg-blue-900 text-white text-sm font-semibold px-3 py-1 rounded-md focus:outline-none focus:ring border'">Small</AppButton>
      <AppButton :customClass="'bg-blue-900 text-white text-base font-semibold px-4 py-2 rounded-md  focus:outline-none focus:ring border'">medium</AppButton>
      <AppButton :customClass="'bg-blue-900 text-white text-lg font-semibold px-6 py-3 rounded-md focus:outline-none focus:ring border'">Large</AppButton>
      
      <AppButton :customClass="'bg-gray-100 text-gray-700 hover:bg-gray-200 text-sm font-semibold px-3 py-1 rounded-md focus:outline-none focus:ring border'">Small</AppButton>
      <AppButton :customClass="'bg-gray-100 text-gray-700 hover:bg-gray-200 text-base font-semibold px-4 py-2 rounded-md  focus:outline-none focus:ring border'">medium</AppButton>
      <AppButton :customClass="'bg-gray-100 text-gray-700 hover:bg-gray-200 text-lg font-semibold px-6 py-3 rounded-md focus:outline-none focus:ring border'">Large</AppButton>

    </div>
    <p class="mt-3 lg:flex md:flex hidden">Button Sizes provide the flexibility you need to create buttons that seamlessly integrate with your project's design. Whether you want small, medium, or large buttons, you can easily achieve the desired button size with this component.</p>
  </BaseCard>


<!-- Working with Links -->

  <BaseCard>
    <h1 class="font-bold text-xl mb-4">Working with Links</h1>
    <hr class="my-4 border-t-2 border-gray-300 lg:flex md:flex hidden" />
    <p class="lg:flex md:flex hidden">The Button Link component allows you to create buttons that function as links. These buttons are versatile and can be used to navigate to different sections of your website or external URLs..</p>
    <hr class="my-4 border-t-2 border-gray-300 lg:flex md:flex hidden" />
    <div class="flex flex-wrap items-center gap-2 mt-6 border border-gray-200 p-2">
      <AppButton :href="'https://www.google.com/'" :target="'_blank'" :customClass="'p-3 bg-blue-900 text-white hover:bg-blue-800 focus:outline-none focus:ring border rounded-xl'">Primary</AppButton>
      <AppButton :href="'https://www.google.com/'" :target="'_blank'" :customClass="'p-3 bg-gray-100 text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring border rounded-xl'">Secondary</AppButton>
      <AppButton :href="'https://www.google.com/'" :target="'_blank'" :customClass="'p-3 bg-teal-600 text-white hover:bg-teal-700 focus:outline-none focus:ring border rounded-xl'">Success</AppButton>
      <AppButton :href="'https://www.google.com/'" :target="'_blank'" :customClass="'p-3 bg-yellow-600 text-black hover:bg-yellow-700 focus:outline-none focus:ring border rounded-xl'">Warning</AppButton>
      <AppButton :href="'https://www.google.com/'" :target="'_blank'" :customClass="'p-3 bg-orange-600 text-white hover:bg-orange-700 focus:outline-none focus:ring border rounded-xl'">Pending</AppButton>
      <AppButton :href="'https://www.google.com/'" :target="'_blank'" :customClass="'p-3 bg-red-600 text-white hover:bg-red-700 focus:outline-none focus:ring border rounded-xl'">Danger</AppButton>
      <AppButton :href="'https://www.google.com/'" :target="'_blank'" :customClass="'p-3 bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:ring border rounded-xl'">Dark</AppButton>
    
          <p class="mt-3 lg:flex md:flex hidden">Button Link components offer a seamless way to incorporate interactive links into your web project. Use them to create buttons that guide users to different sections of your website or external URLs, enhancing user experience and navigation.</p>
    </div>
  </BaseCard>



<!-- Elevated Buttons -->

   <BaseCard>
    <h1 class="font-bold text-xl mb-4">Elevated Buttons</h1>
    <hr class="my-4 border-t-2 border-gray-300 lg:flex md:flex hidden" />
    <p class="lg:flex md:flex hidden">Elevated buttons are designed to stand out and provide visual depth. They add a sense of interactivity to your user interface, making it clear that these are clickable elements. This section covers elevated buttons in various styles.</p>
    <hr class="my-4 border-t-2 border-gray-300 lg:flex md:flex hidden" />
    <div class="flex flex-wrap items-center gap-2 mt-6 border border-gray-200 p-2">
    <AppButton :customClass="'bg-blue-900 text-white px-5 py-2 rounded-md font-semibold'">Primary</AppButton>
    <AppButton :customClass="'bg-gray-100 text-gray-600 px-5 py-2 rounded-md font-semibold'">Secondary</AppButton>
    <AppButton :customClass="'bg-teal-600 text-white px-5 py-2 rounded-md font-semibold'">Success</AppButton>
    <AppButton :customClass="'bg-yellow-500 text-black px-5 py-2 rounded-md font-semibold'">Warning</AppButton>
    <AppButton :customClass="'bg-orange-500 text-white px-5 py-2 rounded-md font-semibold'">Pending</AppButton>
    <AppButton :customClass="'bg-red-600 text-white px-5 py-2 rounded-md font-semibold'">Danger</AppButton>
    <AppButton :customClass="'bg-gray-800 text-white px-5 py-2 rounded-md font-semibold'">Dark</AppButton>


    <AppButton :customClass="'bg-blue-900 text-white px-5 py-2 rounded-2xl font-semibold'">Primary</AppButton>
    <AppButton :customClass="'bg-gray-100 text-gray-600 px-5 py-2 rounded-xl font-semibold'">Secondary</AppButton>
    <AppButton :customClass="'bg-teal-600 text-white px-5 py-2 rounded-4xl font-semibold'">Success</AppButton>
    <AppButton :customClass="'bg-yellow-500 text-black px-5 py-2 rounded-md font-semibold'">Warning</AppButton>
    <AppButton :customClass="'bg-orange-500 text-white px-5 py-2 rounded-md font-semibold'">Pending</AppButton>
    <AppButton :customClass="'bg-red-600 text-white px-5 py-2 rounded-md font-semibold'">Danger</AppButton>
    <AppButton :customClass="'bg-gray-800 text-white px-5 py-2 rounded-md font-semibold'">Dark</AppButton>


          <p class="mt-3 lg:flex md:flex hidden">Elevated buttons are an effective way to enhance the interactivity and visual appeal of your user interface. They offer a clear indication of clickable elements and can be customized to match your design preferences.</p>
    </div>
  </BaseCard>


<!-- Social Media Buttons -->

  <BaseCard>
    <h1 class="font-bold text-xl mb-4">Social Media Buttons</h1>
    <hr class="my-4 border-t-2 border-gray-300 lg:flex md:flex hidden" />
    <p class="lg:flex md:flex hidden">Social media buttons are essential for connecting with your audience and promoting your content across various platforms. This section covers social media buttons with different icons and styles.</p>
    <hr class="my-4 border-t-2 border-gray-300 lg:flex md:flex hidden" />
    <div class="flex flex-wrap items-center gap-2 mt-6 border border-gray-200 p-2">
     <!-- Facebook -->
  <AppButton :href="'https://facebook.com'" :target="'_blank'" :customClass="'bg-[#3b5998] text-white px-4 py-2 rounded-md font-semibold flex items-center gap-2'">
    <i class="fab fa-facebook-f"></i> Facebook
  </AppButton>

  <!-- Twitter -->
  <AppButton :href="'https://twitter.com'" :target="'_blank'" :customClass="'bg-[#1DA1F2] text-white px-4 py-2 rounded-md font-semibold flex items-center gap-2'">
    <i class="fab fa-twitter"></i> Twitter
  </AppButton>

  <!-- Instagram -->
  <AppButton :href="'https://instagram.com'" :target="'_blank'" :customClass="'bg-[#8a3ab9] text-white px-4 py-2 rounded-md font-semibold flex items-center gap-2'">
    <i class="fab fa-instagram"></i> Instagram
  </AppButton>

  <!-- LinkedIn -->
  <AppButton :href="'https://linkedin.com'" :target="'_blank'" :customClass="'bg-[#0077b5] text-white px-4 py-2 rounded-md font-semibold flex items-center gap-2'">
    <i class="fab fa-linkedin-in"></i> Linkedin
  </AppButton>
          <p class="mt-3 lg:flex md:flex hidden">Use these social media buttons strategically to promote your content and connect with your users on their preferred platforms, ultimately driving engagement and growth.</p>
    </div>
  </BaseCard>

<!-- Outline Buttons -->

    <BaseCard>
    <h1 class="font-bold text-xl mb-4">Outline Buttons</h1>
    <hr class="my-4 border-t-2 border-gray-300 lg:flex md:flex hidden" />
    <p class="lg:flex md:flex hidden">Outline buttons provide a subtle and stylish way to present actions or choices to your users. They maintain a clean and minimalist appearance while offering clear interaction points.</p>
    <hr class="my-4 border-t-2 border-gray-300 lg:flex md:flex hidden" />
    <div class="flex flex-wrap items-center gap-2 mt-6 border border-gray-200 p-2">
     
      <AppButton :customClass="'text-blue-900 border border-blue-900 hover:bg-blue-900 hover:text-white px-4 py-2 rounded-md font-semibold transition'">
    Primary
  </AppButton>

  <AppButton :customClass="'text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-black px-4 py-2 rounded-md font-semibold transition'">
    Secondary
  </AppButton>

  <AppButton :customClass="'text-teal-600 border border-teal-600 hover:bg-teal-600 hover:text-white px-4 py-2 rounded-md font-semibold transition'">
    Success
  </AppButton>

  <AppButton :customClass="'text-yellow-600 border border-yellow-600 hover:bg-yellow-600 hover:text-white px-4 py-2 rounded-md font-semibold transition'">
    Warning
  </AppButton>

  <AppButton :customClass="'text-orange-600 border border-orange-600 hover:bg-orange-600 hover:text-white px-4 py-2 rounded-md font-semibold transition'">
    Pending
  </AppButton>

  <AppButton :customClass="'text-red-600 border border-red-600 hover:bg-red-600 hover:text-white px-4 py-2 rounded-md font-semibold transition'">
    Danger
  </AppButton>

  <AppButton :customClass="'text-gray-800 border border-gray-800 hover:bg-gray-800 hover:text-white px-4 py-2 rounded-md font-semibold transition'">
    Dark
  </AppButton>

          <p class="mt-3 lg:flex md:flex hidden">Use outline buttons for actions like form submissions, navigation, or as alternatives to regular buttons to enhance your website or application's overall user experience.</p>
    </div>
  </BaseCard>


<!-- Loading State Buttons -->

   <BaseCard>
    <h1 class="font-bold text-xl mb-4">Loading State Buttons</h1>
    <hr class="my-4 border-t-2 border-gray-300 lg:flex md:flex hidden" />
    <p class="lg:flex md:flex hidden">Loading state buttons are an essential part of a user-friendly interface. They indicate ongoing actions, such as saving, adding, loading, or deleting, and provide feedback to users while they wait for a process to complete.</p>
    <hr class="my-4 border-t-2 border-gray-300 lg:flex md:flex hidden" />
    <div class="flex flex-wrap items-center gap-2 mt-6 border border-gray-200 p-2">
     
       <!-- Saving -->
  <AppButton :customClass="'flex items-center gap-2 px-4 py-2 bg-blue-900 text-white rounded-md font-semibold'">
    Saving <i class="fas fa-spinner fa-spin"></i>
  </AppButton>

  <!-- Adding -->
  <AppButton :customClass="'flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-md font-semibold'">
    Adding <i class="fas fa-circle-notch fa-spin"></i>
  </AppButton>

  <!-- Loading -->
  <AppButton :customClass="'flex items-center gap-2 px-4 py-2 bg-yellow-600 text-black rounded-md font-semibold'">
    Loading <i class="fas fa-ellipsis-h"></i>
  </AppButton>

  <!-- Deleting -->
  <AppButton :customClass="'flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md font-semibold'">
    Deleting <i class="fas fa-spinner fa-spin"></i>
  </AppButton>

          <p class="mt-3 lg:flex md:flex hidden">Consider using loading state buttons for actions like saving, adding, loading data, or deleting items to improve the overall usability of your website or application.</p>
    </div>
  </BaseCard>


<!-- Rounded Buttons -->


   <BaseCard>
    <h1 class="font-bold text-xl mb-4">Rounded Buttons</h1>
    <hr class="my-4 border-t-2 border-gray-300 lg:flex md:flex hidden" />
    <p class="lg:flex md:flex hidden">Rounded buttons provide a visually pleasing and modern touch to your user interface. They soften the edges of traditional buttons, making them appear more inviting and user-friendly. This section explores how to use rounded buttons effectively in your project.</p>
    <hr class="my-4 border-t-2 border-gray-300 lg:flex md:flex hidden" />
    <div class="flex flex-wrap items-center gap-2 mt-6 border border-gray-200 p-2">
      <AppButton :customClass="'px-6 py-1 bg-blue-900 text-white hover:bg-blue-800 focus:outline-none focus:ring border rounded-2xl'">Primary</AppButton>
      <AppButton :customClass="'px-6 py-1 bg-gray-100 text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring border rounded-3xl'">Secondary</AppButton>
      <AppButton :customClass="'px-6 py-1 bg-teal-600 text-white hover:bg-teal-700 focus:outline-none focus:ring border rounded-xl'">Success</AppButton>
      <AppButton :customClass="'px-6 py-1 bg-yellow-600 text-black hover:bg-yellow-700 focus:outline-none focus:ring border rounded-2xl'">Warning</AppButton>
      <AppButton :customClass="'px-6 py-1 bg-orange-600 text-white hover:bg-orange-700 focus:outline-none focus:ring border rounded-xl'">Pending</AppButton>
      <AppButton :customClass="'px-6 py-1 bg-red-600 text-white hover:bg-red-700 focus:outline-none focus:ring border rounded-xl'">Danger</AppButton>
      <AppButton :customClass="'px-6 py-1 bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:ring border rounded-xl'">Dark</AppButton>
    
          <p class="mt-3 lg:flex md:flex hidden">Consider using rounded buttons for various actions, such as primary actions, secondary actions, success notifications, and more, to make your UI elements more aesthetically pleasing and approachable.</p>
    </div>
  </BaseCard>



<!-- Soft Color Buttons -->


   <BaseCard>
    <h1 class="font-bold text-xl mb-4">Soft Color Buttons</h1>
    <hr class="my-4 border-t-2 border-gray-300 lg:flex md:flex hidden" />
    <p class="lg:flex md:flex hidden">Soft color buttons add a touch of elegance and subtlety to your user interface. These buttons use gentle, muted colors that are visually appealing without being too overpowering. In this section, you'll learn how to use soft color buttons effectively in your project</p>
    <hr class="my-4 border-t-2 border-gray-300 lg:flex md:flex hidden" />
    <div class="flex flex-wrap items-center gap-2 mt-6 border border-gray-200 p-2">
      <!-- Primary -->
  <AppButton :customClass="'bg-indigo-100 text-indigo-800 px-5 py-2 rounded-full font-semibold'">
    Primary
  </AppButton>

  <!-- Secondary -->
  <AppButton :customClass="'bg-gray-100 text-gray-600 px-5 py-2 rounded-full font-semibold'">
    Secondary
  </AppButton>

  <!-- Success -->
  <AppButton :customClass="'bg-teal-100 text-teal-700 px-5 py-2 rounded-full font-semibold'">
    Success
  </AppButton>

  <!-- Warning -->
  <AppButton :customClass="'bg-yellow-100 text-yellow-700 px-5 py-2 rounded-full font-semibold'">
    Warning
  </AppButton>

  <!-- Pending -->
  <AppButton :customClass="'bg-orange-100 text-orange-700 px-5 py-2 rounded-full font-semibold'">
    Pending
  </AppButton>

  <!-- Danger -->
  <AppButton :customClass="'bg-red-100 text-red-700 px-5 py-2 rounded-full font-semibold'">
    Danger
  </AppButton>

  <!-- Dark -->
  <AppButton :customClass="'bg-gray-300 text-gray-800 px-5 py-2 rounded-full font-semibold'">
    Dark
  </AppButton>
          <p class="mt-3 lg:flex md:flex hidden">Soft color buttons provide a subtle yet visually appealing option for your UI elements. Their gentle colors can enhance the aesthetics of your user interface without overwhelming the user.</p>
    </div>
  </BaseCard>




<!-- Icon Buttons -->


   <BaseCard>
    <h1 class="font-bold text-xl mb-4">Icon Buttons</h1>
    <hr class="my-4 border-t-2 border-gray-300 lg:flex md:flex hidden" />
    <p class="lg:flex md:flex hidden">Icon buttons allow you to incorporate meaningful icons into your user interface for various actions or functions. In this section, you'll discover how to use icon buttons effectively and enhance your user experience.</p>
    <hr class="my-4 border-t-2 border-gray-300 lg:flex md:flex hidden" />
    <div class="flex flex-wrap items-center gap-2 mt-6 border border-gray-200 p-2">
       <!-- Activity -->
  <AppButton :customClass="'flex items-center gap-2 px-4 py-2 bg-blue-900 text-white rounded-md font-semibold'">
    <i class="fas fa-wave-square"></i> Activity
  </AppButton>

  <!-- Hard Drive -->
  <AppButton :customClass="'flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-md font-semibold'">
    <i class="fas fa-hdd"></i> Hard Drive
  </AppButton>

  <!-- Calendar -->
  <AppButton :customClass="'flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-md font-semibold'">
    <i class="fas fa-calendar-alt"></i> Calendar
  </AppButton>

  <!-- Share -->
  <AppButton :customClass="'flex items-center gap-2 px-4 py-2 bg-yellow-600 text-black rounded-md font-semibold'">
    <i class="fas fa-share-alt"></i> Share
  </AppButton>

  <!-- Pending -->
  <AppButton :customClass="'flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-md font-semibold'">
    <i class="fas fa-download"></i> Pending
  </AppButton>

  <!-- Trash -->
  <AppButton :customClass="'flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md font-semibold'">
    <i class="fas fa-trash-alt"></i> Trash
  </AppButton>

  <!-- Image -->
  <AppButton :customClass="'flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-md font-semibold'">
    <i class="fas fa-image"></i> Image
  </AppButton>
          <p class="mt-3 lg:flex md:flex hidden">Consider using icon buttons to streamline user interactions, convey meaning at a glance, and create a more intuitive interface for your audience</p>
    </div>
  </BaseCard>




<!-- Icon Only Buttons -->

   <BaseCard>
    <h1 class="font-bold text-xl mb-4">Icon Only Buttons</h1>
    <hr class="my-4 border-t-2 border-gray-300 lg:flex md:flex hidden" />
    <p class="lg:flex md:flex hidden">Icon-only buttons are a powerful tool for creating minimalist and intuitive user interfaces. In this section, you'll learn how to use icon-only buttons effectively to enhance the usability and aesthetics of your web or app project.</p>
    <hr class="my-4 border-t-2 border-gray-300 lg:flex md:flex hidden" />
    <div class="flex flex-wrap items-center gap-2 mt-6 border border-gray-200 p-2">
    

       <!-- Activity -->
  <AppButton :customClass="'bg-blue-900 text-white px-4 py-2 rounded-xl text-lg'">
    <i class="fas fa-wave-square"></i>
  </AppButton>

  <!-- Hard Drive -->
  <AppButton :customClass="'bg-gray-100 text-gray-600 px-4 py-2 rounded-xl text-lg'">
    <i class="fas fa-hdd"></i>
  </AppButton>

  <!-- Calendar -->
  <AppButton :customClass="'bg-teal-600 text-white px-4 py-2 rounded-xl text-lg'">
    <i class="fas fa-calendar-alt"></i>
  </AppButton>

  <!-- Share -->
  <AppButton :customClass="'bg-yellow-600 text-black px-4 py-2 rounded-xl text-lg'">
    <i class="fas fa-share-alt"></i>
  </AppButton>

  <!-- Download / Pending -->
  <AppButton :customClass="'bg-orange-600 text-white px-4 py-2 rounded-xl text-lg'">
    <i class="fas fa-download"></i>
  </AppButton>

  <!-- Trash -->
  <AppButton :customClass="'bg-red-600 text-white px-4 py-2 rounded-xl text-lg'">
    <i class="fas fa-trash-alt"></i>
  </AppButton>

  <!-- Image -->
  <AppButton :customClass="'bg-gray-800 text-white px-4 py-2 rounded-xl text-lg'">
    <i class="fas fa-image"></i>
  </AppButton>

          <p class="mt-3 lg:flex md:flex hidden">Icon-only buttons are an excellent choice for modern user interfaces, offering simplicity, clarity, and a sleek design. Whether you're designing a mobile app or a web application, consider using icon-only buttons to create a user-friendly and visually appealing interface that keeps users engaged and informed.</p>
    </div>
  </BaseCard>



    </div>


    
  

  </template>

  <script lang="ts">
import { defineComponent } from "vue";
  import AppButton  from '@/components/AppButton.vue'
  import BaseCard  from '@/components/BaseCard.vue'

  export default defineComponent({
    components:
    {AppButton, BaseCard},
    data(){
      return{
        title:'',
        customClass:'',
        disabled:false,
        }
    }

    

  });
  </script>