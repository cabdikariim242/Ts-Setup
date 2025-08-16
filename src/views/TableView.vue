<template>
  <div class="flex flex-col">
    <BaseCard>
      <h1
        class="dark:text-white pb-4 mb-4 font-bold text-[#476569] border-b border-gray-500 border-dashed"
      >
        Basic Table
      </h1>
      <p class="text-[#476569] mb-4 dark:text-white">
        The "Basic Table" component provides a straightforward way to create
        structured tables in your web applications. This table style is clean
        and minimal, making it suitable for a wide range of use cases.
      </p>
      <p class="text-[#64748b] dark:text-white">Example code / preview</p>
      <div class="border border-gray-300 rounded-md p-3 mt-4">
        <!-- first input -->
        <div>
          <TableComp
            :Headers="Headers"
            :Rows="Rows"
            tableClass="text-left text-[#48566a]"
            tableheadClass="border-b-2 py-3 font-[500] px-4 "
            rowClass="text-left text-[#48566a] border-b "
            tabledataClass="py-3 font-[400] px-4 "
          />
        </div>
        <!-- second input  -->
        <div class="mt-5">
          <TableComp
            :Headers="Headers"
            :Rows="Rows"
            tableClass="text-left text-[#fff] bg-[#1e293b]"
            tableheadClass="border-b-2 py-3 font-[500] border-[#475569] px-4 bg-[#1e293b]"
            rowClass="text-left text-[#fff] border-b border-[#475569] bg-[#1e293b]"
            tabledataClass="py-3 font-[400] px-4 bg-[#1e293b]"
          />
        </div>
      </div>
      <p class="text-[14px] text-[#476569] mt-3 dark:text-white">
        The example above demonstrates how to create a basic table with columns
        for "First Name," "Last Name," and "Username." The table is easy to read
        and can be customized further to suit your application's needs. Use the
        "Basic Table" component when you want a simple, clean table structure
        without additional styling or complexity.
      </p>
    </BaseCard>
    <!-- second basecard -->
    <BaseCard>
      <h1
        class="dark:text-white pb-4 mb-4 font-bold text-[#476569] border-b border-gray-500 border-dashed"
      >
        Bordered Table
      </h1>
      <p class="text-[#476569] mb-4 dark:text-white">
        The "Bordered Table" component is a variation of the basic table, with
        the added feature of borders around the table and its cells. This
        styling choice enhances the visual distinction between rows and columns,
        making the table content more defined and organized.
      </p>
      <p class="text-[#64748b] dark:text-white">Example code / preview</p>
      <div class="border border-gray-300 rounded-md p-3 mt-4">
        <!-- first input -->
        <div>
          <TableComp
            :Headers="Headers"
            :Rows="Rows"
            tableClass="text-left text-[#48566a] border"
            tableheadClass="border-b-2 py-3 font-[500] px-4 border"
            rowClass="text-left text-[#48566a]  border"
            tabledataClass="py-3 font-[400] px-4 border "
          />
        </div>
      </div>
      <p class="text-[14px] text-[#476569] mt-3 dark:text-white">
        In this example, a "Bordered Table" is created with borders around the
        table and its cells. This added visual distinction can be particularly
        useful when you want to emphasize the structure of your table. Use the
        "Bordered Table" component when you need a table with well-defined
        borders to enhance the visual separation between rows and columns.
      </p>
    </BaseCard>
    <!-- third basecard -->
    <BaseCard>
      <h1
        class="dark:text-white pb-4 mb-4 font-bold text-[#476569] border-b border-gray-500 border-dashed"
      >
        Hoverable Table
      </h1>
      <p class="text-[#476569] mb-4 dark:text-white">
        The "Hoverable Table" component is designed to enhance the user
        experience by adding a hover effect to the table rows. When users hover
        their mouse over a row, it becomes highlighted, providing a visual cue
        and improving interactivity.
      </p>
      <p class="text-[#64748b] dark:text-white">Example code / preview</p>
      <div class="border border-gray-300 rounded-md p-3 mt-4">
        <!-- first input -->
        <div>
          <TableComp
            :Headers="Headers"
            :Rows="Rows"
            tableClass="text-left text-[#48566a] border"
            tableheadClass="border-b-2 py-3 font-[500] px-4 border"
            rowClass="text-left text-[#48566a]  border hover:bg-gray-100"
            tabledataClass="py-3 font-[400] px-4 border "
          />
        </div>
      </div>
      <p class="text-[14px] text-[#476569] mt-3 dark:text-white">
        In this example, a "Hoverable Table" is created by adding the hover prop
        to the Table component. As users hover over rows, they visually respond
        by highlighting, making it easier to track their interactions. Use the
        "Hoverable Table" component when you want to improve user engagement and
        provide a more interactive experience in your table-based content.
      </p>
    </BaseCard>
    <!-- third basecard -->
    <BaseCard>
      <h1
        class="dark:text-white pb-4 mb-4 font-bold text-[#476569] border-b border-gray-500 border-dashed"
      >
        Table Head Options
      </h1>
      <p class="text-[#476569] mb-4 dark:text-white">
        The "Table Head Options" feature allows you to customize the appearance
        of the table header to better match your application's design and
        styling. You can choose between two different variants: "dark" and
        "light," each offering a distinct visual style for the table header.
      </p>
      <p class="text-[#64748b] dark:text-white">Example code / preview</p>
      <div class="border border-gray-300 rounded-md p-3 mt-4">
        <!-- first input -->
        <div>
          <TableComp
            :Headers="Headers"
            :Rows="Rows"
            tableClass="text-left text-[#48566a] border-b bg-[#1e293b]"
            tableheadClass="border-b-2 py-3 font-[500] px-4 text-white  "
            rowClass="text-left text-[#48566a]  "
            tabledataClass="py-3 font-[400] px-4 border-b"
          />
        </div>
        <div class="mt-5">
          <TableComp
            :Headers="Headers"
            :Rows="Rows"
            tableClass="text-left text-[#48566a] border-b bg-[#eef1f6]"
            tableheadClass="border-b-2 py-3 font-[500] px-4 text-[#4a5669]  "
            rowClass="text-left text-[#48566a]  "
            tabledataClass="py-3 font-[400] px-4 border-b"
          />
        </div>
      </div>
      <p class="text-[14px] text-[#476569] mt-3 dark:text-white">
        In this example, we showcase two different table headers using the
        "dark" and "light" variants: <br /> <strong>1.</strong> The first table header is styled
        with the "dark" variant, which provides a dark background color and
        white text, creating a visually distinct header. <br /> <strong>2.</strong> The second table header
        utilizes the "light" variant, offering a light background with dark text
        for a more subtle appearance. By using "Table Head Options," you can
        align your table headers with your application's design scheme, ensuring
        a cohesive and aesthetically pleasing user interface.
        your table headers with your application's design scheme, ensuring a
        cohesive and aesthetically pleasing user interface.
      </p>
    </BaseCard>
    <!-- fourth basecard -->
     <BaseCard>
      <h1
        class="dark:text-white pb-4 mb-4 font-bold text-[#476569] border-b border-gray-500 border-dashed"
      >
        Table Head Options
      </h1>
      <p class="text-[#476569] mb-4 dark:text-white">
        The "Table Head Options" feature allows you to customize the appearance
        of the table header to better match your application's design and
        styling. You can choose between two different variants: "dark" and
        "light," each offering a distinct visual style for the table header.
      </p>
      <p class="text-[#64748b] dark:text-white">Example code / preview</p>
      <div class="border border-gray-300 rounded-md p-3 mt-4">
        <!-- first input -->
        <div>
          <TableComp
            :Headers="responsive"
            :Rows="responsiveRow"
            tableClass="text-left over-flow-x-auto text-[#48566a] border-b bg-[#1e293b]"
            tableheadClass="border-b-2 py-3 font-[500] px-4 text-white  "
            rowClass="text-left text-[#48566a]  "
            tabledataClass="py-3 font-[400] px-4 border-b"
          />
        </div>
      
      </div>
      <p class="text-[14px] text-[#476569] mt-3 dark:text-white">
        In this example, we showcase two different table headers using the
        "dark" and "light" variants: <br /> <strong>1.</strong> The first table header is styled
        with the "dark" variant, which provides a dark background color and
        white text, creating a visually distinct header. <br /> <strong>2.</strong> The second table header
        utilizes the "light" variant, offering a light background with dark text
        for a more subtle appearance. By using "Table Head Options," you can
        align your table headers with your application's design scheme, ensuring
        a cohesive and aesthetically pleasing user interface.
        your table headers with your application's design scheme, ensuring a
        cohesive and aesthetically pleasing user interface.
      </p>
    </BaseCard>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import TableComp from "@/components/TableComp.vue";
import BaseCard from "@/components/BaseCard.vue";
export default defineComponent({
  components: {
    TableComp,
    BaseCard,
  },
  data() {
    return {
      Headers: {
        tag: "#",
        firstName: "First Name",
        LastName: "Last Name",
        UserName: "UserName",
      },
      responsive: {
        tag: "#",
        firstName: "First Name",
        LastName: "Last Name",
        UserName: "UserName",
        email: "Email",
        address: "Address",
      },

      Rows: {
        john: {
          tag: 1,
          name: "Angelina",
          LastName: "Jolie",
          username: "@angelinajolie",
        },
        peter: {
          tag: 2,
          name: "Brad",
          LastName: "Pitt",
          username: "@bradpitt",
        },
        doe: {
          tag: 3,
          name: "Jennifer",
          LastName: "Doe",
          username: "@jenniferdoe",
        },
      },
      responsiveRow: {
        john: {
          tag: 1,
          name: "Angelina",
          LastName: "Jolie",
          username: "@angelinajolie",
          email: "angelina@example.com",
          address: "260 W. Storm Street New York, NY 10025.",
        },
        peter: {
          tag: 2,
          name: "Brad",
          LastName: "Pitt",
          username: "@bradpitt",
          email: "brad@example.com",
          address: "47 Division St. Buffalo, NY 14241.",
        },
        doe: {
          tag: 3,
          name: "Jennifer",
          LastName: "Doe",
          username: "@jenniferdoe",
          email: "jennifer@example.com",
          address: "890 Broadway St. New York, NY 10003.",
        },
      },
    };
  },
});
</script>

<style></style>
