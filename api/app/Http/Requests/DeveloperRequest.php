<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DeveloperRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return  ($this->isMethod('POST') ? $this->store() : $this->update());

    }
 
    public function destroy()
    {
        return [
            //
        ];
    }        

    public function view()
    {
        return [
            //
        ];
    }

    public function store()
    {
        return [
            'nome' => 'required',
            'sexo' => 'required|max:1',
            'idade' => 'required|integer',
            'hobby' => 'required',
            'datanascimento' => 'required',
        ];
    }

    public function update()
    {
        return [
            //
        ];
    }


    public function messages()
    {
        return [
            'required' => 'O campo :attribute é obrigatório',
            'integer' => 'O campo :attribute deve ser um número inteiro',
            'max' => 'O campo :attribute ultrapassa a tamanho permitido: :max',
        ];
    }

}
