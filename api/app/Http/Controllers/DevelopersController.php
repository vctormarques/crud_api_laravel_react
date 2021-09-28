<?php

namespace App\Http\Controllers;

use App\Http\Requests\DeveloperRequest as Request;
use App\Developer;

class DevelopersController extends Controller
{
    public function index()
    {
        return Developer::all();
    }

    public function store(Request $request)
    {
        return Developer::create($request->all());
    }

    public function update(Request $request, Developer $developer)
    {
        $developer->update($request->all());
        return $developer;
    }

    public function show(Developer $developer)
    {
        return $developer;
    }

    public function destroy(Request $request, Developer $developer)
    {
        $developer->delete();
        return $developer;
    }

}
