<template>
    <div class="p-14">
        <div class="flex justify-between">
            <h1 class="text-2xl font-bold">Books - Index</h1>
            <Link
                :href="route('books.create')"
                class="
                    px-3
                    py-2
                    text-xs
                    font-medium
                    text-center text-white
                    bg-green-600
                    rounded-lg
                    hover:bg-green-700
                    focus:ring-4
                    focus:outline-none
                    focus:ring-green-300
                "
                >New book</Link
            >
        </div>
        <table class="w-full text-sm text-left text-gray-500 mt-10">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th scope="col" class="px-6 py-3">Name</th>
                    <th scope="col" class="px-6 py-3">Author</th>
                    <th scope="col" class="px-6 py-3">Genre</th>
                    <th scope="col" class="px-6 py-3">ISBN</th>
                    <th scope="col" class="px-6 py-3">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="book in $page.props.books" :key="book.id">
                    <td class="px-6 py-4">
                        <a
                            @click.prevent="onClickBook(book)"
                            class="
                                cursor-pointer
                                hover:text-blue-600
                                hover:underline
                            "
                            title="Show description"
                            >{{ book.name }}
                        </a>
                    </td>
                    <td class="px-6 py-4">{{ book.author }}</td>
                    <td class="px-6 py-4">
                        {{ setStringFirstLetterToUpperCase(book.genre) }}
                    </td>
                    <td class="px-6 py-4">{{ book.isbn }}</td>
                    <td class="px-6 py-4">
                        <Link
                            :href="route('books.edit', book.id)"
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
                                dark:bg-blue-600
                                dark:hover:bg-blue-700
                                dark:focus:ring-blue-800
                            "
                        >
                            Edit</Link
                        >
                        <Link
                            :href="route('books.delete', book.id)"
                            method="delete"
                            as="button"
                            class="
                                ml-2
                                px-3
                                py-2
                                text-xs
                                font-medium
                                text-center text-white
                                bg-red-700
                                rounded-lg
                                hover:bg-red-800
                                focus:ring-4
                                focus:outline-none
                                focus:ring-red-300
                                dark:bg-red-600
                                dark:hover:bg-red-700
                                dark:focus:ring-red-800
                            "
                        >
                            Delete</Link
                        >
                    </td>
                </tr>
            </tbody>
        </table>

        <div class="mt-3 text-xs text-gray-600">
            Total: {{ $page.props.books.length }} books
        </div>

        <Modal :show="showBookDescription" @close="hideBookDescription">
            <div class="p-14">
                {{ bookDescriptionToDisplay }}
            </div>
        </Modal>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { usePage } from "@inertiajs/vue3";
import Modal from "@/Components/Modal.vue";
import { Link } from "@inertiajs/vue3";

const books = ref(usePage().props.books);

const showBookDescription = ref(null);
const bookDescriptionToDisplay = ref(false);

const setStringFirstLetterToUpperCase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const onClickBook = (book) => {
    showBookDescription.value = true;
    bookDescriptionToDisplay.value = book.description;
};

const hideBookDescription = () => {
    showBookDescription.value = false;
};
</script>