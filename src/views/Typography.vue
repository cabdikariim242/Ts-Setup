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
                    Text settings and styles are essential for ensuring that your content is both visually appealing and
                    easy to read. This section covers how to apply various text settings to your content.</p>

                <p class="mt-5 text-[#475569] mb-4 dark:text-white">Example code / preview</p>

                <div class="border-2 px-2 border-dotted py-2">
                    <Typography CustomClass="text-[14px] font-[400] text-[#465569]" msg="Example text" />
                    <Typography CustomClass="text-[14px] font-[500] text-[#475569]" msg="Example medium text" />
                    <Typography CustomClass="text-[14px]  font-[500]  text-[#465569]" msg="Example semibold text" />
                    <Typography CustomClass="text-[14px] font-[700] text-[#475569]" msg="Example bolder text" />
                    <Typography CustomClass="text-[14px] font-[800] text-[#465569]" msg="Example boldest text" />



                    <Typography CustomClass="text-[14px]   mt-5 uppercase font-[400] text-[#475569]"
                        msg="Example uppercase text" />
                    <Typography CustomClass="text-[16px]  lowercase  font-[400] text-[#475569]"
                        msg="Example lowercase text" />
                    <Typography CustomClass="text-[14px] font-[500] capitalized text-[#475569]"
                        msg="Example capitalized text" />
                    <Typography CustomClass="text-[14px] font-[500] text-[#475569]" msg="Example cursive text" />
                </div>

                <p class="mt-4 text-[#475569] text-[14px] dark:text-white">
                    Customizing text settings is crucial for creating visually appealing and readable content. By
                    adjusting font size, line height, color, font family, text alignment, and text decoration, you can
                    tailor your text to suit your application's design and improve the user experience. Remember to
                    maintain consistency in your text settings throughout your application for a polished look.
                </p>
            </div>
        </BaseCard>

        <BaseCard>
            <h1 class="font-bold text-xl mb-4">Common Elements</h1>
            <hr />
            <div class="inline-block w-full">
                <p class="text-[#475569] text-[14px] dark:text-white">
                    Common HTML elements are often used to style or convey special meanings within your content. This
                    section covers some common HTML elements that can be used to enhance the presentation of your
                    text-based content.
                </p>

                <p class="mt-5 text-[#475569] mb-4 dark:text-white">Example code / preview</p>

                <div class="border-2 px-2 border-dotted py-2">
                    <Typography CustomClass="text-[14px] font-[500] text-[#475569]"
                        msg="You can use the mark tag to make the text" span="highlight" spanclass="bg-yellow-300" />
                    <Typography CustomClass="text-[14px] font-[400] line-through text-[#475569]"
                        msg="This line of text is meant to be treated as deleted text." />
                    <Typography CustomClass="text-[14px] font-[400] line-through text-[#475569]"
                        msg="This line of text is meant to be treated as no longer accurate." />
                    <Typography CustomClass="text-[14px] font-[400] underline text-[#475569]"
                        msg="This line of text is meant to be treated as an addition to the document." />
                    <Typography CustomClass="text-[14px] font-[400] underline text-[#475569]"
                        msg="This line of text will render as underlined" />
                    <Typography CustomClass="text-[11.2px] font-[400] -[#475569]"
                        msg="This line of text is meant to be treated as fine print." />
                    <Typography CustomClass="text-[14px] font-[700] text-[#475569]"
                        msg="This line rendered as bold text." />
                    <Typography CustomClass="text-[14px] font-[500] text-[#475569]"
                        msg="This line rendered as italicized text." />




                </div>
                <p class="text-[#475569] text-[14px] dark:text-white">These common HTML elements provide you with a
                    range of tools to enhance the styling and meaning of your text-based content. By using these
                    elements appropriately, you can improve the readability and visual presentation of your content
                    while conveying specific meanings or emphasis where needed.</p>





            </div>
        </BaseCard>

        <BaseCard>
            <h1 class="font-bold text-xl mb-4">Common Elements</h1>
            <hr />
            <div class="inline-block w-full">
                <p class="text-[#475569] text-[14px] dark:text-white">
                    Common HTML elements are often used to style or convey special meanings within your content. This
                    section covers some common HTML elements that can be used to enhance the presentation of your
                    text-based content.
                </p>

                <p class="mt-5 text-[#475569] mb-4 dark:text-white">Example code / preview</p>
                  <h1 class="font-medium">Basic Badge</h1>

                <div class="border-2 px-2 border-dotted py-2 flex flex-row gap-2">



                    <spans spans="1" spanclass1="bg-[#03045e] p-1  text-[15px] text-white rounded-full  text-center " />
                    <spans spans="2" spanclass1="bg-[#f1f4f8] p-1  text-[15px] text-white rounded-full  text-center text-slate-600 dark:border-darkmode-100/40 dark:text-slate-300" />
                    <spans spans="3" spanclass1="bg-[#0d9488] p-1  text-[15px] text-white rounded-full  text-center" />
                    <spans spans="4" spanclass1="bg-[#ca8a04] p-1  text-[15px] text-white rounded-full  text-center" />
                    <spans spans="5" spanclass1="bg-[#b91c1c] p-1  text-[15px] text-white rounded-full  text-center" />
                    <spans spans="6" spanclass1="bg-[#cdd1d7] p-1  text-[15px] text-white rounded-full  text-center text-slate-600 dark:border-darkmode-100/40 dark:text-slate-300" />




                </div>

                     <h1 class="mt-6">Badge Sizes</h1>

                    <div class="border-2 px-2 border-dotted py-2 flex flex-row gap-2 mt-2">


                    <spans spans="1" spanclass1="bg-[#03045e] p-1  text-[15px] text-white rounded-full  text-center " />
                    <spans spans="2" spanclass1="bg-[#f1f4f8] p-1  text-[15px] text-white rounded-full  text-center text-slate-600 dark:border-darkmode-100/40 dark:text-slate-300" />
                    <spans spans="3" spanclass1="bg-[#0d9488] p-1  text-[15px] text-white rounded-full  text-center" />
                    <spans spans="4" spanclass1="bg-[#ca8a04] p-1  text-[15px] text-white rounded-full  text-center" />
                    <spans spans="5" spanclass1="bg-[#b91c1c] p-1  text-[15px] text-white rounded-full  text-center" />
                    <spans spans="6" spanclass1="bg-[#cdd1d7] p-1  text-[15px] text-white rounded-full  text-center text-slate-600  dark:border-darkmode-100/40 dark:text-slate-300" /> <br>


                    

                   




                </div>



                
                 
              

                <p class="text-[#475569] text-[14px] dark:text-white">These common HTML elements provide you with a
                    range of tools to enhance the styling and meaning of your text-based content. By using these
                    elements appropriately, you can improve the readability and visual presentation of your content
                    while conveying specific meanings or emphasis where needed.</p>





            </div>
        </BaseCard>


    </div>

</template>
<script lang="ts">
import Typography from '../components/Typography.vue';
import BaseCard from '../components/BaseCard.vue';
import spans from '../components/spans.vue';

export default {
    name: 'typo',
    components: { Typography, BaseCard, spans }
}
</script>