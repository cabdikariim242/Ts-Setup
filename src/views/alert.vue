<template>
  <div
    class="flex  flex-col mt-[5rem] z-[-10]"
  >
    <BaseCard>
      <h1 class="font-bold text-xl mb-4">Basic Alerts</h1>
      <hr />
      <div class="inline-block w-full">
        <p class="text-[#475569] text-[14px] dark:text-white">
          Alerts are essential for communicating important messages, warnings,
          or updates to users. In this section, you'll learn how to use basic
          alerts effectively to provide information and enhance the user
          experience.
        </p>

        <p class="mt-5 text-[#475569] mb-4 dark:text-white">Example code / preview</p>

        <div class="border-2 px-2 border-dotted py-2">
          <alert
            alert="Awesome simple alert"
            :customClass="'smooth alert bg-[#247ba0]  text-[#ffff] p-4 rounded-xl w-full mb-2'"
          />
          <alert
            alert="Awesome simple alert"
            :customClass="'smooth alert bg-[#ebeff4] text-[#64748b] p-4 rounded-xl mb-2 w-full'"
          />
          <alert
            alert="Awesome simple alert"
            :customClass="'smooth alert bg-[#0d9488] text-[#0f107a] p-4 rounded-xl mb-2 w-full'"
          />
          <alert
            alert="Awesome simple alert"
            :customClass="'smooth alert bg-[#ca8a04] text-[#0] p-4 rounded-xl mb-2 w-full'"
          />
          <alert
            alert="Awesome simple alert"
            :customClass="'smooth alert bg-[#c2410c] text-[#ffff] p-4 rounded-xl mb-2 w-full'"
          />
          <alert
            alert="Awesome simple alert"
            :customClass="'smooth alert bg-[#1e293b] text-[#ffff] p-4 rounded-xl  w-full'"
          />
        </div>
        <p class="mt-4 text-[#475569] text-[14px] dark:text-white">
          Basic alerts are a fundamental element of user interface design,
          serving as a means to communicate important messages clearly and
          effectively. Whether you're building a website or an application,
          incorporating basic alerts can greatly improve the user experience by
          providing timely information and feedback.
        </p>
      </div>
    </BaseCard>

    <!-- second card -->
    <BaseCard>
      <h1 class="font-bold text-xl mb-4">Icon Alerts</h1>
      <hr />
      <div class="inline-block w-full">
        <p class="text-[#475569] text-[14px] dark:text-white">
          Icon alerts combine informative messages with easily recognizable
          icons to convey important information to users effectively. This
          section will guide you on how to use icon alerts in your project.
        </p>

        <p class="mt-5 text-[#475569] mb-4 dark:text-white">Example code / preview</p>

        <div class="border-2 px-2 border-dotted py-2">
          <alert
            icon="fa-solid fa-circle-exclamation"
            alert="Awesome simple alert"
            :customClass="'smooth alert bg-[#247ba0] flex gap-2 items-center text-[#ffff] p-4 rounded-xl w-full mb-2'"
          />
          <alert
            icon="fa-solid fa-triangle-exclamation"
            alert="Awesome simple alert"
            :customClass="'smooth alert bg-[#ebeff4] flex gap-2 items-center text-[#64748b] p-4 rounded-xl mb-2 w-full'"
          />
          <alert
            icon="fa-solid fa-circle-exclamation"
            alert="Awesome simple alert"
            :customClass="'smooth alert bg-[#0d9488] flex gap-2 items-center text-[#0f107a] p-4 rounded-xl mb-2 w-full'"
          />
          <alert
            icon="fa-solid fa-triangle-exclamation"
            alert="Awesome simple alert"
            :customClass="'smooth alert bg-[#ca8a04] flex gap-2 items-center text-[#0] p-4 rounded-xl mb-2 w-full'"
          />
          <alert
            icon="fa-solid fa-circle-exclamation"
            alert="Awesome simple alert"
            :customClass="'smooth alert bg-[#c2410c] flex gap-2 items-center text-[#ffff] p-4 rounded-xl mb-2 w-full'"
          />
          <alert
            icon="fa-solid fa-triangle-exclamation"
            alert="Awesome simple alert"
            :customClass="'smooth alert bg-[#1e293b] flex gap-2 items-center text-[#ffff] p-4 rounded-xl  w-full'"
          />
        </div>
        <p class="mt-4 text-[#475569] text-[14px] dark:text-white">
          Icon alerts are a valuable tool for enhancing user interaction by
          providing clear and visually appealing messages. By following the
          steps above, you can easily integrate icon alerts into your project
          and effectively communicate important information to your users.
        </p>
      </div>
    </BaseCard>

    <!-- third card -->

    <BaseCard>
      <h1 class="font-bold text-xl mb-4">Additional Content Alerts</h1>
      <hr />
      <div class="inline-block w-full">
        <p class="text-[#475569] text-[14px] dark:text-white">
          Additional content alerts allow you to convey more information to
          users by including extra elements within the alert, such as icons,
          labels, or additional text. This section provides guidance on how to
          use additional content alerts effectively.
        </p>

        <p class="mt-5 text-[#475569] mb-4 dark:text-white">Example code / preview</p>

        <div class="border-2 px-2 border-dotted py-2">
          <alert
            alerth="Awesome alert with additional infoNew"
            newe="new"
            alertContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            :customClass="'smooth alert bg-[#247ba0]  text-[#ffff] p-4 rounded-xl w-full mb-2'"
            :spanClass="'text-[#ca8a04] '"
          />
          <alert
            alerth="Awesome alert with additional infoNew"
            newe="new"
            alertContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            :customClass="'smooth alert bg-[#ebeff4] text-[#64748b] p-4 rounded-xl mb-2 w-full'"
          />
          <alert
            alerth="Awesome alert with additional infoNew"
            newe="new"
            alertContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            :customClass="'smooth alert bg-[#0d9488] text-[#0f107a] p-4 rounded-xl mb-2 w-full'"
          />
          <alert
            alerth="Awesome alert with additional infoNew"
            newe="new"
            alertContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            :customClass="'smooth alert bg-[#ca8a04] text-[#0] p-4 rounded-xl mb-2 w-full'"
          />
          <alert
            alerth="Awesome alert with additional infoNew"
            newe="new"
            alertContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            :customClass="'smooth alert bg-[#c2410c] text-[#ffff] p-4 rounded-xl mb-2 w-full'"
            :spanClass="'text-[#ca8a04] '"
          />
          <alert
            alerth="Awesome alert with additional infoNew"
            newe="new"
            alertContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            :customClass="'smooth alert bg-[#1e293b] text-[#ffff] p-4 rounded-xl  w-full'"
            :spanClass="'text-[#0f107a] '"
          />
        </div>
        <p class="mt-4 text-[#475569] text-[14px] dark:text-white">
          Additional content alerts are a valuable tool for delivering richer
          information to users while maintaining a clean and organized design.
          By following the steps above, you can easily integrate additional
          content alerts into your project and enhance your communication with
          users.
        </p>
      </div>
    </BaseCard>

    <!-- fourth card -->

    <BaseCard>
      <h1 class="font-bold text-xl mb-4">Icon Alerts</h1>
      <hr />
      <div class="inline-block w-full">
        <p class="text-[#475569] text-[14px] dark:text-white">
          Icon alerts combine informative messages with easily recognizable
          icons to convey important information to users effectively. This
          section will guide you on how to use icon alerts in your project.
        </p>

        <p class="mt-5 text-[#475569] mb-4 dark:text-white">Example code / preview</p>

        <div class="border-2 px-2 border-dotted py-2">
          
          <alert
           @cancelAlert="iscanceled[0] = false"
            v-if="iscanceled[0]"
            icon="fa-solid fa-circle-exclamation"
            alert="Awesome simple alevrrt"
            icontwo="fa-solid fa-xmark absolute right-3"
       
            :customClass="'smooth alert bg-[#247ba0] flex gap-2 items-center text-[#ffff] p-4 rounded-xl w-full mb-2 transform transition duration-300 ease-out'"
          />

          <alert
           @cancelAlert="iscanceled[1] = false"
            v-if="iscanceled[1]"
            icon="fa-solid fa-triangle-exclamation"
            alert="Awesome simple alert"
            icontwo="fa-solid fa-xmark absolute lg:right-[210px]  md:right-[210px] right-[70px]"
            :customClass="'smooth alert bg-[#ebeff4] flex gap-2 items-center text-[#64748b] p-4 rounded-xl mb-2 w-full  '"
          />

          <alert
          @cancelAlert="iscanceled[2] = false"
            v-if="iscanceled[2]"
            icon="fa-solid fa-circle-exclamation"
            alert="Awesome simple alert"
            icontwo="fa-solid fa-xmark absolute lg:right-[210px]  md:right-[210px] right-[70px]"
            :customClass="'smooth alert bg-[#0d9488] flex gap-2 items-center text-[#0f107a] p-4 rounded-xl mb-2 w-full  '"
          />

          <alert
          @cancelAlert="iscanceled[3] = false"
            v-if="iscanceled[3]"
            icon="fa-solid fa-triangle-exclamation"
            alert="Awesome simple alert"
            icontwo="fa-solid fa-xmark absolute lg:right-[210px]  md:right-[210px] right-[70px]"
            :customClass="'smooth alert border-[#247ba0] flex gap-2 items-center border-2 text-[#247ba0] p-4 rounded-xl mb-2 w-full  '"
          />

          <alert
           @cancelAlert="iscanceled[4] = false"
            v-if="iscanceled[4]"
            icon="fa-solid fa-circle-exclamation"
            alert="Awesome simple alert"
            icontwo="fa-solid fa-xmark absolute lg:right-[210px]  md:right-[210px] right-[70px]"
            :customClass="'smooth alert border-[#b91c1c] border-2 flex gap-2 items-center text-[#b91c1c] p-4 rounded-xl mb-2 w-full  '"
          />

          <alert
            @cancelAlert="iscanceled[5] = false"
            v-if="iscanceled[5]"
            icon="fa-solid fa-triangle-exclamation"
            alert="Awesome simple alert"
            icontwo="fa-solid fa-xmark absolute lg:right-[210px]  md:right-[210px] right-[70px]"
            :customClass="'smooth alert border-[#0d9488] border-2 flex gap-2 items-center text-[#0d9488] p-4 rounded-xl  w-full'"
          />
        </div>
        <p class="mt-4 text-[#475569] text-[14px] dark:text-white">
          Icon alerts are a valuable tool for enhancing user interaction by
          providing clear and visually appealing messages. By following the
          steps above, you can easily integrate icon alerts into your project
          and effectively communicate important information to your users.
        </p>
      </div>
    </BaseCard>

    <!-- fivith card -->
     <BaseCard >
      <h1 class="font-bold text-xl mb-4">Icon Alerts</h1>
      <hr />
      <div class="inline-block w-full">
        <p class="text-[#475569] text-[14px] dark:text-white">
          Icon alerts combine informative messages with easily recognizable
          icons to convey important information to users effectively. This
          section will guide you on how to use icon alerts in your project.
        </p>

        <p class="mt-5 text-[#475569] mb-4 dark:text-white">Example code / preview</p>

        <div class="border-2 px-2 border-dotted py-2">
          <alert
            icon="fa-solid fa-circle-exclamation"
            alert="Awesome simple alert"
            :customClass="'smooth alert bg-[#d3e5ec] flex gap-2 opacity-[50] items-center text-[#62a1bb] p-4 rounded-xl w-full mb-2'"
          />

          
          <alert
            icon="fa-solid fa-triangle-exclamation"
            alert="Awesome simple alert"
            :customClass="'smooth alert bg-[#ebeff4] flex gap-2 items-center text-[#64748b] p-4 rounded-xl mb-2 w-full'"
          />

          <alert
            icon="fa-solid fa-circle-exclamation"
            alert="Awesome simple alert"
            :customClass="'smooth alert bg-[#cfeae7] flex gap-2 items-center text-[#0d9488] p-4 rounded-xl mb-2 w-full'"
          />


          <alert
            icon="fa-solid fa-triangle-exclamation"
            alert="Awesome simple alert"
            :customClass="'smooth alert bg-[#f4e8cd] flex gap-2 items-center text-[#daae52] p-4 rounded-xl mb-2 w-full'"
          />


          <alert
            icon="fa-solid fa-circle-exclamation"
            alert="Awesome simple alert"
            :customClass="'smooth alert bg-[#f1d2d2] flex gap-2 items-center text-[#da8686] p-4 rounded-xl mb-2 w-full'"
          />


          <alert
            icon="fa-solid fa-triangle-exclamation"
            alert="Awesome simple alert"
            :customClass="'smooth alert bg-[#da8686] flex gap-2 items-center text-[#4c5563] p-4 rounded-xl  w-full'"
          />
        </div>
        <p class="mt-4 text-[#475569] text-[14px] dark:text-white">
          Icon alerts are a valuable tool for enhancing user interaction by
          providing clear and visually appealing messages. By following the
          steps above, you can easily integrate icon alerts into your project
          and effectively communicate important information to your users.
        </p>
      </div>
    </BaseCard>
    
  </div>
</template>

<script lang="ts">
import alert from "@/components/alert.vue";
import BaseCard from "@/components/BaseCard.vue"; 

export default {
  components: { alert, BaseCard },
  data() {
    return {
      alert: "",
      alerth: "",
      alertContent: "",
      customClass: "",
      spanClass: "",
      icon: "",
      icontwo: "",
      newe: "",
      iconClass:'',
      iscanceled: [true, true, true, true, true, true],
    };
  },
};
</script>
