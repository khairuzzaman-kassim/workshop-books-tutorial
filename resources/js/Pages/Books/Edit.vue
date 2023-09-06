<template>
    <div class="flex justify-center">
        <form
            class="
                p-14
                flex flex-col
                justify-center
                w-full
                md:w-1/2
                justify-self-center
            "
            @submit.prevent="form.put(route('books.update', book.id))"
        >
            <p class="text-center mb-2 text-3xl">Edit a book</p>

            <InputLabel for="name" value="Name" class="mt-4" />
            <TextInput
                id="name"
                v-model="form.name"
                type="text"
                :autofocus="true"
            />
            <small v-if="errors.name" class="text-red-700">{{
                errors.name
            }}</small>

            <InputLabel for="isbn" value="Isbn" class="mt-4" />
            <TextInput id="isbn" v-model="form.isbn" type="text" />
            <small v-if="errors.isbn" class="text-red-700">{{
                errors.isbn
            }}</small>

            <InputLabel for="author" value="Author" class="mt-4" />
            <TextInput id="author" v-model="form.author" type="text" />
            <small v-if="errors.author" class="text-red-700">{{
                errors.author
            }}</small>

            <InputLabel for="genre" value="Genre" class="mt-4" />
            <TextInput id="genre" v-model="form.genre" type="text" />
            <small v-if="errors.genre" class="text-red-700">{{
                errors.genre
            }}</small>

            <InputLabel for="description" value="Description" class="mt-4" />
            <textarea
                id="description"
                v-model="form.description"
                type="text"
                class="description-input shadow-sm border-gray-300"
            />
            <small v-if="errors.description" class="text-red-700">{{
                errors.description
            }}</small>

            <div>
                <button
                    type="submit"
                    class="
                        px-3
                        py-2
                        text-xs
                        font-medium
                        text-center text-white
                        bg-blue-700
                        rounded-lg
                        hover:bg-blue-800
                        focus:ring-4
                        focus:outline-none
                        focus:ring-blue-300
                        mt-5
                    "
                >
                    Update
                </button>
                <Link
                    :href="route('books.index')"
                    class="
                        ml-3
                        text-xs text-blue-700
                        hover:text-white
                        border border-blue-700
                        hover:bg-blue-800
                        focus:ring-4
                        focus:outline-none
                        focus:ring-blue-300
                        font-medium
                        rounded-lg
                        text-sm
                        px-3
                        py-2
                        text-center
                        mr-2
                        mb-2
                    "
                >
                    Cancel</Link
                >
            </div>
        </form>
    </div>
</template>
<script setup>
import { ref } from "vue";
import { usePage } from "@inertiajs/vue3";
import InputLabel from "@/Components/InputLabel.vue";
import TextInput from "@/Components/TextInput.vue";
import { useForm } from "@inertiajs/vue3";
import { Link } from "@inertiajs/vue3";

defineProps({
    errors: Object,
});

const book = ref(usePage().props.book).value;
const form = useForm({
    name: book.name,
    isbn: book.isbn,
    genre: book.genre,
    author: book.author,
    description: book.description,
});
</script>