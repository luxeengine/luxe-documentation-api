---
title: "luxe: string"
description: API version 2025.11.1
slug: "v/2025.11.1/string"
---
- [Loc](#loc)   
- [Str](#str)   

---


## Loc
```lx
import "luxe: string" for Loc
```
> Interface for the localisation system.
> 
> Each translation always exists in a space and in a language.
> Spaces are contexts, so you might want different spaces for dialogue/menus/icons. Or you can leave everything in the default "game" translation space.
> 
> Unless specified otherwise, the system will fetch the string from the currently active language if possible, if its not available there it will fall back to the set primary language. If the key isn't registered for that either, "MISSING.STRING" will be returned.
> 
> By default there is no active active language set and the primary language is "en".
> 
> ```js
>     //by default language is not set and primary language is `en` with no registered strings
>     Log.print(Strings.get(Loc.get_language())) //null
>     Log.print(Strings.get(Loc.get_primary())) //en
>     Loc.set_language("en")
>     Log.print(Loc.get("start_game")) //MISSING.STRING
> 
>     //as soon as we add a line, we can query it
>     Loc.add("en", Loc.default_space, "start_game", "Start Game!")
>     Log.print(Loc.get("start_game")) //Start Game!
> 
>     //if we query a word in a language where that translation doesnt exist yet (like toki pona here), it falls back to the primary language
>     Log.print(Loc.get("tp", Loc.default_space, "start_game")) //Start Game!
> 
>     //but as soon as it is registered, the translation in the respective language is returned
>     Loc.add("tp", Loc.default_space, "start_game", "o open e musi!")
>     Log.print(Loc.get("tp", Loc.default_space, "start_game")) //o open e musi!
>         
>     //same when we set the current language and use the shorthand get
>     Loc.set_language("tp")
>     Log.print(Loc.get("start_game")) //o open e musi!
> ```

<endpoint module="luxe: string" class="Loc" signature="default_space"></endpoint>
### Loc.default_space
```lx
Loc.default_space : unknown
```
> The default space for localisations, \"game\".   

<endpoint module="luxe: string" class="Loc" signature="missing_string"></endpoint>
### Loc.missing_string
```lx
Loc.missing_string : unknown
```
> The missing string fallback for the engine, typically \"MISSING.STRING\".   

<endpoint module="luxe: string" class="Loc" signature="set_primary(language : String)"></endpoint>
### Loc.set_primary(.)
```lx
Loc.set_primary(language : String) : None
```
> Set the primary language that is used as fallback if a key can't be found in another language.   

<endpoint module="luxe: string" class="Loc" signature="get_primary()"></endpoint>
### Loc.get_primary(.)
```lx
Loc.get_primary() : unknown
```
> Get the primary language.   

<endpoint module="luxe: string" class="Loc" signature="set_language(language : String)"></endpoint>
### Loc.set_language(.)
```lx
Loc.set_language(language : String) : None
```
> Set the current language that strings are gotten for unless specified otherwise.   

<endpoint module="luxe: string" class="Loc" signature="get_language()"></endpoint>
### Loc.get_language(.)
```lx
Loc.get_language() : unknown
```
> Get the current language.   

<endpoint module="luxe: string" class="Loc" signature="add_language(language : String, plural_form : String)"></endpoint>
### Loc.add_language(..)
```lx
Loc.add_language(language : String, plural_form : String) : unknown
```
> Add a language with the given `id` and `plural_form` expression string (just the expression part, not the whole header).   

<endpoint module="luxe: string" class="Loc" signature="add(language : String, space : String, key : String, string : String)"></endpoint>
### Loc.add(....)
```lx
Loc.add(language : String, space : String, key : String, string : String) : None
```
> Add a string to the localisation system.   

<endpoint module="luxe: string" class="Loc" signature="add_plural(language : String, space : String, key : String, strings : List)"></endpoint>
### Loc.add_plural(....)
```lx
Loc.add_plural(language : String, space : String, key : String, strings : List) : None
```
> Add a plural string to the localisation system.   

<endpoint module="luxe: string" class="Loc" signature="get(language : String, space : String, key : String)"></endpoint>
### Loc.get(...)
```lx
Loc.get(language : String, space : String, key : String) : String
```
> Get the string for a key (or fallback in primary language) from the localisation system for a specific language/space.   

<endpoint module="luxe: string" class="Loc" signature="has(language : String, space : String, key : String)"></endpoint>
### Loc.has(...)
```lx
Loc.has(language : String, space : String, key : String) : Bool
```
> Check if the string for a key exists in the localisation system for a specific language/space.   

<endpoint module="luxe: string" class="Loc" signature="get_plural(language : String, space : String, key : String, count : Num)"></endpoint>
### Loc.get_plural(....)
```lx
Loc.get_plural(language : String, space : String, key : String, count : Num) : String
```
> Get the string for a key from the localisation system for a specific language/space, with the plural count.   

<endpoint module="luxe: string" class="Loc" signature="get(space : String, key : String)"></endpoint>
### Loc.get(..)
```lx
Loc.get(space : String, key : String) : String
```
> Get the string for a key (or fallback in primary language) from the localisation system in the current language and in a specific space.   

<endpoint module="luxe: string" class="Loc" signature="get(key : String)"></endpoint>
### Loc.get(.)
```lx
Loc.get(key : String) : String
```
> Get the string for a key (or fallback in primary language) from the localisation system in the current language and in the default space.   

<endpoint module="luxe: string" class="Loc" signature="has(key : String)"></endpoint>
### Loc.has(.)
```lx
Loc.has(key : String) : Bool
```
> Check if the string for a key exists in the localisation system for the current language and default space   

<endpoint module="luxe: string" class="Loc" signature="load_primary(asset_id : String)"></endpoint>
### Loc.load_primary(.)
```lx
Loc.load_primary(asset_id : String) : Bool
```
> no docs found   

<endpoint module="luxe: string" class="Loc" signature="load_language(asset_id : String)"></endpoint>
### Loc.load_language(.)
```lx
Loc.load_language(asset_id : String) : Bool
```
> no docs found   

<endpoint module="luxe: string" class="Loc" signature="load_language(asset_id : String, primary : Bool)"></endpoint>
### Loc.load_language(..)
```lx
Loc.load_language(asset_id : String, primary : Bool) : Bool
```
> no docs found   


## Str
```lx
import "luxe: string" for Str
```
> Utility class for String functions.

<endpoint module="luxe: string" class="Str" signature="split_lines(string : String)"></endpoint>
### Str.split_lines(.)
```lx
Str.split_lines(string : String) : List
```
> Split a string into its lines.
> Returns `[""]` for empty strings.
> 
> ```js
>     var multiline_string = \"\"\"
>     leaf
>     tree
>     fruit
>     mushroom
>     \"\"\"
> 
>     var split_string = Str.split_lines(multiline_string)
>     Log.print(split_string) //[leaf, tree, fruit, mushroom]
> ```   

<endpoint module="luxe: string" class="Str" signature="split(string : String, delim : String)"></endpoint>
### Str.split(..)
```lx
Str.split(string : String, delim : String) : List
```
> **Deprecated** use `string.split(delim)`
> Split a string at every occurance of an delimiter.
> 
> ```js
>     var input = "Owl eats Squirrel eats Nuts"
>     var split_string = Str.split(input, " eats ")
>     Log.print(split_string) //[Owl, Squirrel, Nuts]
> ```   

<endpoint module="luxe: string" class="Str" signature="indent_strip(string : String)"></endpoint>
### Str.indent_strip(.)
```lx
Str.indent_strip(string : String) : String
```
> Removes indentation from the first line of a string, and the same amount from subsequent lines if any. 
> Lines with shorter indentation than the first line are skipped.
> 
> ```js
>     var input = \"\"\"
>         Sparrow
>         Pidgeon
>             Crow
>     \"\"\"
>     var unindented = Str.indent_strip(input)
>     Log.print(unindented) //Sparrow\nPidgeon\n    Crow
> ```   

<endpoint module="luxe: string" class="Str" signature="indent(string : String)"></endpoint>
### Str.indent(.)
```lx
Str.indent(string : String) : Num
```
> returns how much indentation characters (whitespace or tabs) a string has.
> 
> ```js
>     var line = "\t  text"
>     var indent = Str.indent(line)
>     Log.print(indent) //3
> ```   

<endpoint module="luxe: string" class="Str" signature="trim(string : String)"></endpoint>
### Str.trim(.)
```lx
Str.trim(string : String) : String
```
> Trims whitespace characters (" ", "\n", "\t") from front and end of an string.
> Calls wren core `String.trim` internally.
> 
> ```js
>     var input = "  \n\t   Pallas's cat   \n\t  "
>     var trimmed = Str.trim(input)
>     Log.print(trimmed) //Pallas's cat
> ```   

<endpoint module="luxe: string" class="Str" signature="compare(a : String, b : String)"></endpoint>
### Str.compare(..)
```lx
Str.compare(a : String, b : String) : Num
```
> Comparison function for strings. Order is based on the unicode number of the first non-equal codepoint or length.
> Returns `1` when `a > b`
> Returns `-1` when `a < b`
> returns `0` when theyre equal
> 
> ```js
>     Log.print(Str.compare("a", "b")) // -1
>     Log.print(Str.compare("a", "Z")) // 1
>     Log.print(Str.compare("abc", "abc")) // 0
>     Log.print(Str.compare("abc", "abcd")) // -1
>     Log.print(Str.compare("ö", "ä")) // 1
> ```   

<endpoint module="luxe: string" class="Str" signature="replace(string : String, sub : String, repl : String)"></endpoint>
### Str.replace(...)
```lx
Str.replace(string : String, sub : String, repl : String) : String
```
> Replace all occurances of one substring with another.
> Call wren core `String.replace` internally.
> 
> ```js
>     var input = "Hello World"
>     var replaced = Str.replace(input, "o", "ø")
>     Log.print(replaced) //Hellø Wørld
> ```   

<endpoint module="luxe: string" class="Str" signature="is_alphanumeric(str : String)"></endpoint>
### Str.is_alphanumeric(.)
```lx
Str.is_alphanumeric(str : String) : Bool
```
> Get whether all characters in a string are alphanumeric (uppercase or lowercase latin characters or arabic numerals)
> 
> ```js
>     Log.print(Str.is_alphanumeric("Leaf")) //true
>     Log.print(Str.is_alphanumeric("4Leaf")) //true
>     Log.print(Str.is_alphanumeric("4-leaf")) //false
>     Log.print(Str.is_alphanumeric("Wørld")) //false
> ```   

<endpoint module="luxe: string" class="Str" signature="is_numeric(str : String)"></endpoint>
### Str.is_numeric(.)
```lx
Str.is_numeric(str : String) : Bool
```
> Get whether all characters in a string are numeric (arabic numerals)
> 
> ```js
>     Log.print(Str.is_alphanumeric("Leaf")) //false
>     Log.print(Str.is_alphanumeric("4")) //true
>     Log.print(Str.is_alphanumeric("4-leaf")) //false
>     Log.print(Str.is_alphanumeric("3¾")) //false
> ```   

<endpoint module="luxe: string" class="Str" signature="increment_end(string : String)"></endpoint>
### Str.increment_end(.)
```lx
Str.increment_end(string : String) : String
```
> no docs found   

<endpoint module="luxe: string" class="Str" signature="vec(value : Vec)"></endpoint>
### Str.vec(.)
```lx
Str.vec(value : Vec) : String
```
> Get the string representation of a vector. (uses 6 digits after decimal point and spaces between numbers)   

<endpoint module="luxe: string" class="Str" signature="vec(value : Vec, precision : Num)"></endpoint>
### Str.vec(..)
```lx
Str.vec(value : Vec, precision : Num) : String
```
> Get the string representation of a vector with the specified digits after the decimal point. (puts spaces between numbers)   

<endpoint module="luxe: string" class="Str" signature="vec(value : Vec, precision : Num, sep : String)"></endpoint>
### Str.vec(...)
```lx
Str.vec(value : Vec, precision : Num, sep : String) : String
```
> Get the string representation of a vector.
> You can specify both the precision (digits after decimal point) and the seperator of how the vector is rendered.
> 
> ```js
>     var vector = [1, 2, 3.14159265359]
>     Log.print(Str.print(vector)) //1 2 3.141593
>     Log.print(Str.print(vector, 2)) //1 2 3.14
>     Log.print(Str.print(vector, 1, ", ")) //1, 2, 3.1
> ```   

<endpoint module="luxe: string" class="Str" signature="fixed(number : Num, precision : Num)"></endpoint>
### Str.fixed(..)
```lx
Str.fixed(number : Num, precision : Num) : String
```
> Get the string representation of a number with a specified amount of digits after the decimal point.   

<endpoint module="luxe: string" class="Str" signature="fixed(number : Num)"></endpoint>
### Str.fixed(.)
```lx
Str.fixed(number : Num) : String
```
> Get the string representation of a number with 6 digits after the decimal points.   

<endpoint module="luxe: string" class="Str" signature="fixed(number : Num, precision : Num, padded : Bool)"></endpoint>
### Str.fixed(...)
```lx
Str.fixed(number : Num, precision : Num, padded : Bool) : String
```
> Get the string representation of a number with a specified amount of digits after the decimal point.
> If padded is true, this function adds zeroes until the requested amount of digits after the decimal point is reached.   

<endpoint module="luxe: string" class="Str" signature="url_encode(string : String)"></endpoint>
### Str.url_encode(.)
```lx
Str.url_encode(string : String) : String
```
> no docs found   

<endpoint module="luxe: string" class="Str" signature="hex(number : Num)"></endpoint>
### Str.hex(.)
```lx
Str.hex(number : Num) : String
```
> Get string representation of number in base-16/hexadecimal.   

<endpoint module="luxe: string" class="Str" signature="binary(number : Num)"></endpoint>
### Str.binary(.)
```lx
Str.binary(number : Num) : String
```
> Get string representation of number in base-2/binary.   

<endpoint module="luxe: string" class="Str" signature="binary(number : Num, bit_width : Num)"></endpoint>
### Str.binary(..)
```lx
Str.binary(number : Num, bit_width : Num) : String
```
> Get string representation of (positive integer) number in base-2/binary.
> `bit_width` declares to how many digits the number should be expanded (adds zeroes to left of it).   

<endpoint module="luxe: string" class="Str" signature="path_is_absolute(path : String)"></endpoint>
### Str.path_is_absolute(.)
```lx
Str.path_is_absolute(path : String) : Bool
```
> Get whether a path is absolute (instead of relative).   

<endpoint module="luxe: string" class="Str" signature="path_directory(path : String)"></endpoint>
### Str.path_directory(.)
```lx
Str.path_directory(path : String) : String
```
> Get the directory path of a path pointing to a file.   

<endpoint module="luxe: string" class="Str" signature="path_filename(path : String)"></endpoint>
### Str.path_filename(.)
```lx
Str.path_filename(path : String) : String
```
> Get the filename (including extension) of a path pointing to a file.   

<endpoint module="luxe: string" class="Str" signature="path_extension(path : String)"></endpoint>
### Str.path_extension(.)
```lx
Str.path_extension(path : String) : String
```
> Get the extension of a path pointing to a file.   

<endpoint module="luxe: string" class="Str" signature="path_extensionless(path : String)"></endpoint>
### Str.path_extensionless(.)
```lx
Str.path_extensionless(path : String) : String
```
> Get the filename (excluding extension) of a path pointing to a file.   

<endpoint module="luxe: string" class="Str" signature="bytes_formatted(byte_count : Num)"></endpoint>
### Str.bytes_formatted(.)
```lx
Str.bytes_formatted(byte_count : Num) : String
```
> Get a byte size as bytes/KB/MB/GB/TB (whichever is the biggest unit that is at least 1) with 3 digits after the decimal place.   

<endpoint module="luxe: string" class="Str" signature="bytes_formatted(byte_count : Num, precision : Num)"></endpoint>
### Str.bytes_formatted(..)
```lx
Str.bytes_formatted(byte_count : Num, precision : Num) : String
```
> Get a byte size as bytes/KB/MB/GB/TB (whichever is the biggest unit that is at least 1) with `precision` digits after the decimal place.   

<endpoint module="luxe: string" class="Str" signature="upper(string : String)"></endpoint>
### Str.upper(.)
```lx
Str.upper(string : String) : String
```
> Converts a string to all uppercase.   

<endpoint module="luxe: string" class="Str" signature="lower(string : String)"></endpoint>
### Str.lower(.)
```lx
Str.lower(string : String) : String
```
> Converts a string to all lowercase.   

<endpoint module="luxe: string" class="Str" signature="wrap(string : String, column : Num)"></endpoint>
### Str.wrap(..)
```lx
Str.wrap(string : String, column : Num) : String
```
> Wraps text on spaces to keep line length within column width. Does not break words that are longer than column width.   

<endpoint module="luxe: string" class="Str" signature="path(path : String)"></endpoint>
### Str.path(.)
```lx
Str.path(path : String) : String
```
> Normalize a path.   

<endpoint module="luxe: string" class="Str" signature="strip_markup(string : String)"></endpoint>
### Str.strip_markup(.)
```lx
Str.strip_markup(string : String) : String
```
> Strips the luxe markup formatting from the given string, returning the raw value   

<endpoint module="luxe: string" class="Str" signature="path_normalize(string : String)"></endpoint>
### Str.path_normalize(.)
```lx
Str.path_normalize(string : String) : String
```
> Normalizes the path also resolving ../ and ./ and so on   

<endpoint module="luxe: string" class="Str" signature="format(string : String, arg0 : Any)"></endpoint>
### Str.format(..)
```lx
Str.format(string : String, arg0 : Any) : String
```
> no docs found   

<endpoint module="luxe: string" class="Str" signature="format(string : String, arg0 : Any, arg1 : Any)"></endpoint>
### Str.format(...)
```lx
Str.format(string : String, arg0 : Any, arg1 : Any) : String
```
> no docs found   

<endpoint module="luxe: string" class="Str" signature="format(string : String, arg0 : Any, arg1 : Any, arg2 : Any)"></endpoint>
### Str.format(....)
```lx
Str.format(string : String, arg0 : Any, arg1 : Any, arg2 : Any) : String
```
> no docs found   

<endpoint module="luxe: string" class="Str" signature="format(string : String, arg0 : Any, arg1 : Any, arg2 : Any, arg3 : Any)"></endpoint>
### Str.format(.....)
```lx
Str.format(string : String, arg0 : Any, arg1 : Any, arg2 : Any, arg3 : Any) : String
```
> no docs found   

<endpoint module="luxe: string" class="Str" signature="format(string : String, arg0 : Any, arg1 : Any, arg2 : Any, arg3 : Any, arg4 : Any)"></endpoint>
### Str.format(......)
```lx
Str.format(string : String, arg0 : Any, arg1 : Any, arg2 : Any, arg3 : Any, arg4 : Any) : String
```
> no docs found   

<endpoint module="luxe: string" class="Str" signature="format(string : String, arg0 : Any, arg1 : Any, arg2 : Any, arg3 : Any, arg4 : Any, arg5 : Any)"></endpoint>
### Str.format(.......)
```lx
Str.format(string : String, arg0 : Any, arg1 : Any, arg2 : Any, arg3 : Any, arg4 : Any, arg5 : Any) : String
```
> no docs found   

<endpoint module="luxe: string" class="Str" signature="format(string : String, arg0 : Any, arg1 : Any, arg2 : Any, arg3 : Any, arg4 : Any, arg5 : Any, arg6 : Any)"></endpoint>
### Str.format(........)
```lx
Str.format(string : String, arg0 : Any, arg1 : Any, arg2 : Any, arg3 : Any, arg4 : Any, arg5 : Any, arg6 : Any) : String
```
> no docs found   

<endpoint module="luxe: string" class="Str" signature="format(string : String, arg0 : Any, arg1 : Any, arg2 : Any, arg3 : Any, arg4 : Any, arg5 : Any, arg6 : Any, arg7 : Any)"></endpoint>
### Str.format(.........)
```lx
Str.format(string : String, arg0 : Any, arg1 : Any, arg2 : Any, arg3 : Any, arg4 : Any, arg5 : Any, arg6 : Any, arg7 : Any) : String
```
> no docs found   

<endpoint module="luxe: string" class="Str" signature="format(string : String, arg0 : Any, arg1 : Any, arg2 : Any, arg3 : Any, arg4 : Any, arg5 : Any, arg6 : Any, arg7 : Any, arg8 : Any)"></endpoint>
### Str.format(..........)
```lx
Str.format(string : String, arg0 : Any, arg1 : Any, arg2 : Any, arg3 : Any, arg4 : Any, arg5 : Any, arg6 : Any, arg7 : Any, arg8 : Any) : String
```
> no docs found   

<endpoint module="luxe: string" class="Str" signature="format(string : String, arg0 : Any, arg1 : Any, arg2 : Any, arg3 : Any, arg4 : Any, arg5 : Any, arg6 : Any, arg7 : Any, arg8 : Any, arg9 : Any)"></endpoint>
### Str.format(...........)
```lx
Str.format(string : String, arg0 : Any, arg1 : Any, arg2 : Any, arg3 : Any, arg4 : Any, arg5 : Any, arg6 : Any, arg7 : Any, arg8 : Any, arg9 : Any) : String
```
> no docs found   

<endpoint module="luxe: string" class="Str" signature="format(string : String, arg0 : Any, arg1 : Any, arg2 : Any, arg3 : Any, arg4 : Any, arg5 : Any, arg6 : Any, arg7 : Any, arg8 : Any, arg9 : Any, arg10 : Any)"></endpoint>
### Str.format(............)
```lx
Str.format(string : String, arg0 : Any, arg1 : Any, arg2 : Any, arg3 : Any, arg4 : Any, arg5 : Any, arg6 : Any, arg7 : Any, arg8 : Any, arg9 : Any, arg10 : Any) : String
```
> no docs found   

<endpoint module="luxe: string" class="Str" signature="format(string : String, arg0 : Any, arg1 : Any, arg2 : Any, arg3 : Any, arg4 : Any, arg5 : Any, arg6 : Any, arg7 : Any, arg8 : Any, arg9 : Any, arg10 : Any, arg11 : Any)"></endpoint>
### Str.format(.............)
```lx
Str.format(string : String, arg0 : Any, arg1 : Any, arg2 : Any, arg3 : Any, arg4 : Any, arg5 : Any, arg6 : Any, arg7 : Any, arg8 : Any, arg9 : Any, arg10 : Any, arg11 : Any) : String
```
> no docs found   

<endpoint module="luxe: string" class="Str" signature="format(string : String, arg0 : Any, arg1 : Any, arg2 : Any, arg3 : Any, arg4 : Any, arg5 : Any, arg6 : Any, arg7 : Any, arg8 : Any, arg9 : Any, arg10 : Any, arg11 : Any, arg12 : Any)"></endpoint>
### Str.format(..............)
```lx
Str.format(string : String, arg0 : Any, arg1 : Any, arg2 : Any, arg3 : Any, arg4 : Any, arg5 : Any, arg6 : Any, arg7 : Any, arg8 : Any, arg9 : Any, arg10 : Any, arg11 : Any, arg12 : Any) : String
```
> no docs found   

<endpoint module="luxe: string" class="Str" signature="format(string : String, arg0 : Any, arg1 : Any, arg2 : Any, arg3 : Any, arg4 : Any, arg5 : Any, arg6 : Any, arg7 : Any, arg8 : Any, arg9 : Any, arg10 : Any, arg11 : Any, arg12 : Any, arg13 : Any)"></endpoint>
### Str.format(...............)
```lx
Str.format(string : String, arg0 : Any, arg1 : Any, arg2 : Any, arg3 : Any, arg4 : Any, arg5 : Any, arg6 : Any, arg7 : Any, arg8 : Any, arg9 : Any, arg10 : Any, arg11 : Any, arg12 : Any, arg13 : Any) : String
```
> no docs found   

<endpoint module="luxe: string" class="Str" signature="format(string : String, arg0 : Any, arg1 : Any, arg2 : Any, arg3 : Any, arg4 : Any, arg5 : Any, arg6 : Any, arg7 : Any, arg8 : Any, arg9 : Any, arg10 : Any, arg11 : Any, arg12 : Any, arg13 : Any, arg14 : Any)"></endpoint>
### Str.format(................)
```lx
Str.format(string : String, arg0 : Any, arg1 : Any, arg2 : Any, arg3 : Any, arg4 : Any, arg5 : Any, arg6 : Any, arg7 : Any, arg8 : Any, arg9 : Any, arg10 : Any, arg11 : Any, arg12 : Any, arg13 : Any, arg14 : Any) : String
```
> no docs found   

<endpoint module="luxe: string" class="Str" signature="format_list(string : String, args : List)"></endpoint>
### Str.format_list(..)
```lx
Str.format_list(string : String, args : List) : String
```
> Format the string, replacing placeholder with other text.
> Placeholders are in the format `{x}`, where `x` is an index into the arguments list of `format_list`, or a numbered argument in the `format` function.
> Placeholders can appear multiple times and do not need to appear in order.
> 
> ```js
>     Log.print(Str.format("{0} {1} {2}", "Crown", "Trunk", "Roots")) //Crown Trunk Roots
>     Log.print(Str.format("{2} {1} {0}", "Crown", "Trunk", "Roots")) //Roots Trunk Crown
>     Log.print(Str.format("{0} {0} {1}", "Duck", "Goose")) //Duck Duck Goose
> ```   

<endpoint module="luxe: string" class="Str" signature="valid(string : String)"></endpoint>
### Str.valid(.)
```lx
Str.valid(string : String) : Bool
```
> Check if string is null or empty   

<endpoint module="luxe: string" class="Str" signature="template(string : String, key_value_context : Map)"></endpoint>
### Str.template(..)
```lx
Str.template(string : String, key_value_context : Map) : unknown
```
> A simple templating helper. Replace parts of the text with data from a given context map, by simple (non nested) string keys.
> For example, given the string `"hello <[user.name]>"` we can do `Str.template(string, {"user.name": name})`.
> The keys are delimited with `<[` and ended with `]>` in the string. Any not matched, won't be replaced.
> If you have a wren map with nested values, `LX.flatten()` can convert to simple key values for you.
> Values in the map are converted with `toString` if not a string.
> 
> ```js
>   Log.print(Str.template("hello <[user.name]>", {"user.name" : "luxe"})) //hello luxe
> ```   

