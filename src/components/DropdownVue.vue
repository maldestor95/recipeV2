<template>
    <div class="flex justify-center">
  <div>
    <div class="dropdown relative">
        <textarea>test</textarea>
        <BtnVue >
            <div class="px-2 flex" @click="toggleDisplay">
                DropDown
                    <svg
                    class="w-2 ml-2"
                    viewBox="0 0 320 512"
                    >
                    <path
                        fill="currentColor"
                        d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                    ></path>
                    </svg>
            </div>
            <ul
                :class="{hidden: state.displayDropDown}"
                class="
                dropdown-menu
                min-w-max
                absolute
                bg-white
                text-base
                z-50
                float-left
                py-2
                list-none
                text-left
                rounded-lg
                shadow-lg
                mt-1
                m-0
                bg-clip-padding
                border-none
                "
                aria-labelledby="dropdownMenuButton1"
            >
                <li v-for="action in listOfAction" :key="listOfAction.label">
                <a
                    class="
                    dropdown-item
                    text-sm
                    py-2
                    px-4
                    font-normal
                    block
                    w-full
                    whitespace-nowrap
                    bg-transparent
                    text-gray-700
                    hover:bg-gray-100
                    "
                    :href="action.link"
                    >{{action.label}}</a
                >
                </li>

            </ul>
        </BtnVue>
    </div>
  </div>
</div>
</template>
<script setup lang="ts">
    import {reactive} from 'vue'
    const state = reactive({ displayDropDown:true })
    const listOfAction= [
        {label:'action1', link:'link1'},
        {label:'action2', link:'link2'},
        {label:'action3', link:'link3'},
        {label:'action4', link:'link4'},
    ]
    function toggleDisplay(){state.displayDropDown=!state.displayDropDown}
   
</script>