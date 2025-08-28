<template>
  <div
    class="flex  w-full flex-col lg:ml-[320px] md:ml-[150px] ml-4 mt-[5rem]"
  >
  
      <!-- first div /card -->
      <div class="w-full rounded-xl">
        <h1 class="hidden mt-4 lg:flex md:flex"> 
          <strong class="text-black dark:text-white mr-2">Regular Form</strong>
          <span class="text-gray-700 dark:text-[rgba(255,255,255,.8)]">
            • Unlock the potential of our Form component for creating
            user-friendly and interactive web forms effortlessly.
          </span>
        </h1>
        <BaseCard id="one">
          <h1
            class="dark:text-white pb-4 mb-4 font-bold text-[#476569] border-b border-gray-500 border-dashed"
          >
            input
          </h1>
          <p class="text-[#476569] mb-4 dark:text-white">
            Input fields are a fundamental part of web forms and allow users to
            provide information or interact with your application. This section
            covers how to use input components in your web application and
            provides examples of different input styles.
          </p>
          <p class="text-[#64748b] dark:text-white">Example code / preview</p>
          <div class="border border-gray-300 rounded-md p-3 mt-4">
            <!-- first input -->
            <div>
              <Label
                label="Input text"
                :labelClass="'text-[#4b586c] font-[400]'"
                id="text"
                :required="false"
              />
              <Input
                title="Input text"
                type="text"
                :customClass="'w-full pl-3 p-1 my-3 rounded pl-1 focus:outline-none focus:ring-4 focus:ring-blue-200 border border-gray-300 text-[#4b586c] '"
              />
            </div>
            <!-- second input  -->
            <div>
              <Label
                label="Rounded"
                :labelClass="'text-[#4b586c]  font-[400]  mt-5'"
                id="text"
                :required="false"
              />
              <Input
                title="Rounded"
                type="text"
                :customClass="'w-full pl-3 rounded-3xl py-1  mt-2 rounded pl-1 my-3 focus:outline-none focus:ring-4 focus:ring-blue-200 border border-gray-300 text-[#4b586c] '"
              />
            </div>
            <!-- third input -->
            <div>
              <Label
                label="With Help"
                :labelClass="'text-[#4b586c] font-[400] mb-5 mt-5'"
                id="text"
                :required="false"
              />
              <Input
                title="With Help"
                type="text"
                :customClass="'w-full pl-3 p-1 rounded pl-1 my-3 focus:outline-none focus:ring-4 focus:ring-blue-200 border border-gray-300 text-[#4b586c] '"
              />
              <p class="text-[14px] text-[#476569] mb-3 dark:text-white">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <!-- forth input -->
            <div>
              <Label
                label="Password"
                :labelClass="'text-[#4b586c] font-[400] mb-5 mt-5'"
                id="Password"
                :required="false"
              />
              <Input
                title="Password"
                type="Password"
                :customClass="'w-full pl-3 p-1 rounded pl-1 my-3 focus:outline-none focus:ring-4 focus:ring-blue-200 border border-gray-300 text-[#4b586c] '"
              />
            </div>
            <!-- fivth input -->
            <div>
              <Label
                label="Disabled"
                :labelClass="'text-[#4b586c] font-[400] mb-5 mt-5'"
                id="text"
                :required="false"
              />
              <Input
                :disabled="true"
                title="Disabled"
                type="text"
                :customClass="'w-full cursor-not-allowed pl-3 p-1 rounded pl-1 my-3 focus:outline-none focus:ring-4 focus:ring-blue-200 border border-gray-300 text-[#4b586c] bg-[#f1f5f9]'"
              />
            </div>
          </div>
          <p class="mt-3 text-[#475569] dark:text-white">
            By using the `Input` component and customizing its attributes, you
            can create versatile input fields that meet your application's
            requirements and provide a seamless user experience. Be sure to
            choose the appropriate input type and validation rules based on your
            specific use case.
          </p>
        </BaseCard>
      </div>
      <!-- second div /card -->
      <div class="w-full rounded-xl">
        <BaseCard id="two">
          <h1
            class=" dark:text-white pb-4 mb-4 font-bold text-[#476569] border-b border-gray-500 border-dashed"
          >
            Input Sizing
          </h1>
          <p class="text-[#476569] mb-4 dark:text-white">
            Input sizing is an important aspect of user interface design. It
            allows you to control the dimensions of input fields to ensure they
            fit well within your application's layout. This section covers how
            to adjust the size of input components and provides examples of
            different sizing options.
          </p>
          <p class="text-[#64748b] dark:text-white">Example code / preview</p>
          <div class="border border-gray-300 rounded-md p-3 mt-4">
            <!-- first input -->
            <div>
              <Input
                title=".form-control-lg"
                type="text"
                :customClass="'w-full pl-3 p-1 my-3 text-[20px] font-[500] rounded pl-2  focus:outline-none focus:ring-4 focus:ring-blue-200 border border-gray-300 text-[#4b586c] '"
              />
            </div>
            <!-- second input  -->
            <div>
              <Input
                title="Default Input "
                type="text"
                :customClass="'w-full pl-3 py-1  mt-2 rounded pl-1 my-3 focus:outline-none focus:ring-4 focus:ring-blue-200 border border-gray-300 text-[#4b586c] '"
              />
            </div>
            <!-- third input -->
            <div>
              <Input
                title=".form-control-sm"
                type="text"
                :customClass="'w-full pl-3 text-[14px] p-1 rounded pl-1 my-3 focus:outline-none focus:ring-4 focus:ring-blue-200 border border-gray-300 text-[#4b586c] '"
              />
            </div>
          </div>
          <p class="text-[14px] text-[#476569] mt-3 dark:text-white">
            Controlling the size of input components is essential for achieving
            a visually appealing and user-friendly design. By using the `Input`
            component and specifying the desired size, you can ensure that input
            fields match your application's layout and styling requirements.
            Experiment with different sizes to find the one that best fits your
            design goals and provides an optimal user experience.
          </p>
        </BaseCard>
      </div>
      <!-- third div /card -->

      <div class="w-full rounded-xl">
        <BaseCard id="three">
          <h1
            class=" dark:text-white pb-4 mb-4 font-bold text-[#476569] border-b border-gray-500 border-dashed"
          >
            Input Groups
          </h1>
          <p class="text-[#476569] mb-4 dark:text-white">
            Input groups are a useful UI element for combining form inputs with
            additional text or icons. They are often used to create visually
            integrated and contextually relevant input fields. This section
            covers how to create input groups using the `InputGroup` component
            and provides examples of various input group configurations.
          </p>
          <p class="text-[#64748b] dark:text-white">Example code / preview</p>
          <div class="border border-gray-300 rounded-md p-3 mt-4">
            <!-- first input -->
            <div class="flex items-center">
              <Input
                title="@"
                :disabled="true"
                type="text"
                :customClass="'w-10 h-[34px] mr-[-1px] text-center  font-bold border border-gray-300 bg-[#f1f5f9] '"
              />
              <Input
                title=".form-control-lg"
                type="text"
                :customClass="'w-full pl-3 p-1 my-3  font-[500] rounded pl-2  focus:outline-none focus:ring-4 focus:ring-blue-200 border border-gray-300 text-[#4b586c] '"
              />
            </div>
            <!-- second input  -->
            <div class="flex items-center">
              <Input
                title="Price"
                type="text"
                :customClass="'w-full pl-3 p-1 my-3  font-[500] rounded pl-2  focus:outline-none focus:ring-4 focus:ring-blue-200 border border-gray-300 text-[#4b586c] '"
              />
              <Input
                title=".00"
                :disabled="true"
                type="text"
                :customClass="'w-10 h-[34px] ml-[-1px] text-center  font-bold border border-gray-300 bg-[#f1f5f9] '"
              />
            </div>
            <!-- third input -->
            <div class="flex items-center">
              <Input
                title="@"
                :disabled="true"
                type="text"
                :customClass="'w-10 h-[34px] mr-[-1px] text-center  font-bold border border-gray-300 bg-[#f1f5f9] '"
              />
              <Input
                title="Price"
                type="text"
                :customClass="'w-full h-[34px] pl-3 p-1 my-3  font-[500] rounded pl-2  focus:outline-none focus:ring-4 focus:ring-blue-200-4  border border-gray-300 text-[#4b586c] '"
              />
              <Input
                title=".00"
                :disabled="true"
                type="text"
                :customClass="'w-10 h-[34px] ml-[-1px] text-center  font-bold border border-gray-300 bg-[#f1f5f9] '"
              />
            </div>
          </div>
          <p class="text-[14px] text-[#476569] mt-3 dark:text-white">
            Input groups are a versatile tool for enhancing the usability and
            visual appeal of your forms. Whether you need to add icons, labels,
            or supplementary text to your input fields, the `InputGroup`
            component allows you to create cohesive and informative input
            groups. Experiment with different configurations to find the best
            way to present your form elements and improve the user experience.
          </p>
        </BaseCard>
      </div>
      <!-- forth div /card -->

      <div class="w-full rounded-xl">
        <BaseCard id="four">
          <h1
            class="dark:text-white pb-4 mb-4 font-bold text-[#476569] border-b border-gray-500 border-dashed"
          >
            Input State
          </h1>
          <p class="text-[#476569] mb-4 dark:text-white">
            Input states provide visual feedback to users about the status or
            validity of form inputs. This section covers how to apply different
            states to form inputs using CSS classes and provides examples of
            various input states.
          </p>
          <p class="text-[#64748b] dark:text-white">Example code / preview</p>
          <div class="border border-gray-300 rounded-md p-3 mt-4">
            <!-- first input -->
            <div class="flex flex-col">
              <Label
                label="Input Success"
                :labelClass="'text-[#95989B] font-[500]'"
                id="text"
                :required="false"
              />

              <Input
                title="Input text"
                type="text"
                :customClass="'w-full pl-3 p-1 my-3  rounded pl-2  focus:outline-none focus:ring-4 focus:ring-blue-200 border border-[#0d9488] text-[#798392] '"
              />

              <div class="flex bg-[#f1f5f9] w-full h-1 gap-10">
                <div class="h-full w-full max-w-56 bg-[#33b9ae]"></div>
                <div class="h-full w-full max-w-56 bg-[#33b9ae]"></div>
                <div class="h-full w-full max-w-56 bg-[#33b9ae]"></div>
              </div>
              <p class="text-[16px] font-[480] text-[#58b5ad] dark:text-white">
                Strong Password
              </p>
            </div>
            <!-- second input  -->
            <div class="flex flex-col">
              <Label
                label="Input Warning"
                :labelClass="'text-[#95989B] mt-3'"
                id="text"
                :required="false"
              />

              <Input
                title="Input text"
                type="text"
                :customClass="'w-full pl-3 p-1 my-3  rounded pl-2  focus:outline-none focus:ring-4 focus:ring-blue-200-4 focus:ring-4 focus:ring-blue-200-blue-200 border border-[#ca8a04] text-[#798392] '"
              />
              <p class="text-[16px] font-[480] text-[#d29b29]">
                Attempting to reconnect to server...
              </p>
            </div>
            <!-- third input -->
            <div class="flex flex-col">
              <Label
                label="Input Error"
                :labelClass="'text-[#95989B] mt-3'"
                id="text"
                :required="false"
              />

              <Input
                title="Input text"
                type="text"
                :customClass="'w-full pl-3 p-1 my-3  rounded pl-2  focus:outline-none focus:ring-4 focus:ring-blue-200-4 focus:ring-4 focus:ring-blue-200-blue-200 border border-[#b91c1c] text-[#798392] '"
              />
              <p class="text-[16px] font-[480] text-[#b91c1c]">
                This field is required
              </p>
            </div>
          </div>
          <p class="text-[14px] text-[#476569] mt-3 dark:text-white">
            Input states are crucial for providing feedback to users and
            enhancing the user experience in your forms. By applying the
            appropriate state classes, you can visually communicate the status
            of each input field, making it easier for users to understand and
            interact with your forms. Experiment with different styles and
            states to match the design and functionality of your web
            application.
          </p>
        </BaseCard>
      </div>
    </div>

    
    

  <input-comp />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseCard from "@/components/BaseCard.vue";
import Input from "@/components/input-comp.vue";
import Label from "@/components/labelComp.vue";

export default defineComponent({
  components: { BaseCard, Input, Label },
  data() {
    return {
      customClass: "",
      Name: "",
      SecondName: "",
      password: "",
      email: "",
      title: "",
      modelValue: "",
      type: null,
      labelClass: "",
      id: "",
      required: true,
      label: "",
      disabled: false,
      isScrollingUp: true,
      lastScrollY: window.scrollY,
    };
  },


});
</script>
