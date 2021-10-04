<?php

namespace App\Http\Controllers;

use App\Http\Requests\DeveloperRequest as Request;
use App\Developer;
use Illuminate\Support\Carbon;

class DevelopersController extends Controller
{
    public function index()
    {
        return Developer::all();
    }

    public function store(Request $request)
    {
        $data = $request->all();
        $data['datanascimento'] = Carbon::createFromFormat('d/m/Y', $data['datanascimento'])->format('Y-m-d');;
        return Developer::create($data);
    }

    public function update(Request $request, Developer $developer)
    {

        $data = $request->all();
        $data['datanascimento'] = Carbon::createFromFormat('d/m/Y', $data['datanascimento'])->format('Y-m-d');;
        return $developer->update($data);
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
