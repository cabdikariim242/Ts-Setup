<template>
    <div class="mt-20">
        <BaseCard>
            <h1 class="font-bold text-xl mb-4">Heading</h1>
            <hr />
            <div class="inline-block w-full">
                <p class="text-[#475569] text-[14px] dark:text-white">
                    Headings are an essential part of structuring and organizing content in your application. They
                    provide hierarchy and help users navigate and understand the information presented. This section
                    covers how to use headings effectively in your project.
                </p>

                <p class="mt-5 text-[#475569] mb-4 dark:text-white">Example code / preview</p>

                <div class="border-2 px-2 border-dotted py-2">
                    <Typography CustomClass="text-[36px] font-[500] text-[#465569]" msg="h1. Heading 1" />
                    <Typography CustomClass="text-[30px] font-[500] text-[#465569]" msg="h2. Heading 2" />
                    <Typography CustomClass="text-[24px] font-[500] text-[#465569]" msg="h3. Heading 3" />
                    <Typography CustomClass="text-[20px] font-[500] text-[#465569]" msg="h4. Heading 4" />
                    <Typography CustomClass="text-[18px] font-[500] text-[#465569]" msg="h5. Heading 5" />
                    <Typography CustomClass="text-[14px] font-[500] text-[#465569]" msg="h6. Heading 6" />

                    <Typography CustomClass="text-[36px] font-[500] text-[#03045e]" msg="h1. Heading 1" />
                    <Typography CustomClass="text-[30px] font-[500] text-[#475569]" msg="h2. Heading 2" />
                    <Typography CustomClass="text-[24px] font-[500] text-[#0d9488]" msg="h3. Heading 3" />
                    <Typography CustomClass="text-[20px] font-[500] text-[#ca8a04]" msg="h4. Heading 4" />
                    <Typography CustomClass="text-[18px] font-[500] text-[#dc2626]" msg="h5. Heading 5" />
                    <Typography CustomClass="text-[14px] font-[500] text-[$64748b]" msg="h6. Heading 6" />
                </div>

                <p class="mt-4 text-[#475569] text-[14px] dark:text-white">
                    Icon alerts are a valuable tool for enhancing user interaction by
                    providing clear and visually appealing messages. By following the
                    steps above, you can easily integrate icon alerts into your project
                    and effectively communicate important information to your users.
                </p>
            </div>
        </BaseCard>


        <!-- BASE CARD 2  -->
        <BaseCard>
            <h1 class="font-bold text-xl mb-4">Icon Alerts</h1>
            <hr />
            <div class="inline-block w-full">
                <p class="text-[#475569] text-[14px] dark:text-white">
                    Icon alerts combine informative messages with easily recognizable
                    Headings play a crucial role in structuring and organizing your content. By using headings
                    effectively and consistently, you can improve the accessibility and readability of your application.
                    Remember to choose the appropriate heading level, keep headings semantic, and follow accessibility
                    best practices for a better user experience. </p>

                <p class="mt-5 text-[#475569] mb-4 dark:text-white">Example code / preview</p>

                <div class="border-2 px-2 border-dotted py-2">
                    <Typography CustomClass="text-[14px] font-[400] text-[#465569]" msg="Example text" />
                    <Typography CustomClass="text-[14px] font-[500] text-[#475569]" msg="Example medium text" />
                    <Typography CustomClass="text-[14px]  font-[500]  text-[#465569]" msg="Example semibold text" />
                    <Typography CustomClass="text-[14px] font-[700] text-[#475569]" msg="Example bolder text" />
                    <Typography CustomClass="text-[14px] font-[800] text-[#465569]" msg="Example boldest text" />

                  

                    <Typography CustomClass="text-[14px]   mt-5 uppercase font-[400] text-[#475569]" msg="Example uppercase text" />
                    <Typography CustomClass="text-[16px]  lowercase  font-[400] text-[#475569]" msg="Example lowercase text" />
                    <Typography CustomClass="text-[14px] font-[500] capitalized text-[#475569]" msg="Example capitalized text" />
                    <Typography CustomClass="text-[14px] font-[500] text-[#475569]" msg="Example cursive text" />
                </div>

                <p class="mt-4 text-[#475569] text-[14px] dark:text-white">
                    Icon alerts are a valuable tool for enhancing user interaction by
                    providing clear and visually appealing messages. By following the
                    steps above, you can easily integrate icon alerts into your project
                    and effectively communicate important information to your users.
                </p>
            </div>
        </BaseCard>

        <BaseCard>
            <h1 class="font-bold text-xl mb-4">Common Elements</h1>
            <hr />
            <div class="inline-block w-full">
                <p class="text-[#475569] text-[14px] dark:text-white">
                  Common HTML elements are often used to style or convey special meanings within your content. This section covers some common HTML elements that can be used to enhance the presentation of your text-based content.
                    </p>

                 <p class="mt-5 text-[#475569] mb-4 dark:text-white">Example code / preview</p>

                 <div class="border-2 px-2 border-dotted py-2">
                    <Typography CustomClass="text-[14px] font-[500] text-[#475569]" msg="You can use the mark tag to" span="tohighlight" />
                 </div>


                </div>
                </BaseCard>
    </div>

</template>
<script lang="ts">
import Typography from '../components/Typography.vue';
import BaseCard from '../components/BaseCard.vue';

export default {
    name: 'typo',
    components: { Typography, BaseCard }
}
</script>