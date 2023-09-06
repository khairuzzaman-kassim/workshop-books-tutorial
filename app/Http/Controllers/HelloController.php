<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HelloController extends Controller
{
    public function hello(){
        // return '<h1>Hello Zaman! Today\'s date: ' . date('Y-m-d H:i:s') . '</h1>';
        return inertia('Hello');
    }
}
