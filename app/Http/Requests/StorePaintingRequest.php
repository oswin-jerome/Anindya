<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class StorePaintingRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Auth::check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "description" => "string|required",
            "post" => "string|required",
            "price" => "numeric",
            "short_description" => "string|required",
            "title" => "string|required",
            "medium" => "string|required",
            "size" => "string|required",
            "painting" => "image|required",
            "painting_id" => "nullable|integer|exists:paintings,id"
        ];
    }
}
