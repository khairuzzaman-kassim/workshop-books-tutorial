<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Book;

class BookController extends Controller
{
    public function index(){
        $books = Book::select('id', 'name', 'author', 'genre', 'isbn', 'description')
        ->get();

        return inertia('Books/Index', compact('books'));
    }

    public function create(){
        return inertia('Books/Create');
    }

    public function edit(Book $book){
        return inertia('Books/Edit', compact('book'));
    }

    public function update(Request $request, Book $book){
        $validated_data = $request->validate([
            'name' => 'required|max:100|min:5',
            'isbn' => 'required|digits:13|unique:books,isbn,' . $book->id,
            'author' => 'required|max:100|min:5',
            'genre' => 'required|max:100|min:5',
            'description' => 'required',
        ]);

        try {
            $book->name = $validated_data['name'];
            $book->isbn = $validated_data['isbn'];
            $book->author = $validated_data['author'];
            $book->genre = $validated_data['genre'];
            $book->description = $validated_data['description'];
            $book->save();
        } catch (\Exception $e) {
            return redirect()->route('display_error');
        }
        return redirect()->route('books.index');
    }

    public function delete(Book $book){
        $book->delete();
        return redirect()->route('books.index');
    }

    public function store(Request $request){
        $validated_data = $request->validate([
            'name' => 'required|max:100|min:5',
            'isbn' => 'required|digits:13|unique:books,isbn',
            'author' => 'required|max:100|min:5',
            'genre' => 'required|max:100|min:5',
            'description' => 'required',
        ]);

        try {
            $book = new Book;
            $book->name = $validated_data['name'];
            $book->isbn = $validated_data['isbn'];
            $book->author = $validated_data['author'];
            $book->genre = $validated_data['genre'];
            $book->description = $validated_data['description'];
            $book->save();
        } catch (\Exception $e) {
            return redirect()->route('display_error');
        }
        return redirect()->route('books.index');
    }
}
