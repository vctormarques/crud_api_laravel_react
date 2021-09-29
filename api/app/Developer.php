<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Developer extends Model
{
    protected $fillable = ['nome', 'sexo', 'idade', 'hobby', 'datanascimento'];
    

    protected $dates = [
        'datanascimento'
    ];

    protected $dateFormat = 'Y-m-d';

}
