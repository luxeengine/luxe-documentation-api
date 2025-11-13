---
title: "luxe: string"
description: API version 2025.11.1
---
## `luxe: string{:lx}` module

- [Loc](#loc)   
- [Str](#str)   

---


### Loc
`import "luxe: string" for Loc{:lx}`
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

- [default_space](#Loc.default_space)
- [missing_string](#Loc.missing_string)
- [set_primary](#Loc.set_primary)(**language**: `String{:lx}`)
- [get_primary](#Loc.get_primary)()
- [set_language](#Loc.set_language)(**language**: `String{:lx}`)
- [get_language](#Loc.get_language)()
- [add_language](#Loc.add_language+2)(**language**: `String{:lx}`, **plural_form**: `String{:lx}`)
- [add](#Loc.add+4)(**language**: `String{:lx}`, **space**: `String{:lx}`, **key**: `String{:lx}`, **string**: `String{:lx}`)
- [add_plural](#Loc.add_plural+4)(**language**: `String{:lx}`, **space**: `String{:lx}`, **key**: `String{:lx}`, **strings**: `List{:lx}`)
- [get](#Loc.get+3)(**language**: `String{:lx}`, **space**: `String{:lx}`, **key**: `String{:lx}`)
- [has](#Loc.has+3)(**language**: `String{:lx}`, **space**: `String{:lx}`, **key**: `String{:lx}`)
- [get_plural](#Loc.get_plural+4)(**language**: `String{:lx}`, **space**: `String{:lx}`, **key**: `String{:lx}`, **count**: `Num{:lx}`)
- [get](#Loc.get+2)(**space**: `String{:lx}`, **key**: `String{:lx}`)
- [get](#Loc.get)(**key**: `String{:lx}`)
- [has](#Loc.has)(**key**: `String{:lx}`)
- [load_primary](#Loc.load_primary)(**asset_id**: `String{:lx}`)
- [load_language](#Loc.load_language)(**asset_id**: `String{:lx}`)
- [load_language](#Loc.load_language+2)(**asset_id**: `String{:lx}`, **primary**: `Bool{:lx}`)


---

<endpoint module="luxe: string" class="Loc" signature="default_space"></endpoint>
<h4 class="signature_head">Loc.default_space</h4><a class="signature-arity" href="#Loc.default_space" title="Permanent link">1</a><signature id="Loc.default_space">

```lx
Loc.default_space : unknown
```
</signature>

> The default space for localisations, \"game\".   

<endpoint module="luxe: string" class="Loc" signature="missing_string"></endpoint>
<h4 class="signature_head">Loc.missing_string</h4><a class="signature-arity" href="#Loc.missing_string" title="Permanent link">1</a><signature id="Loc.missing_string">

```lx
Loc.missing_string : unknown
```
</signature>

> The missing string fallback for the engine, typically \"MISSING.STRING\".   

<endpoint module="luxe: string" class="Loc" signature="set_primary(language : String)"></endpoint>
<h4 class="signature_head">Loc.set_primary</h4><a class="signature-arity" href="#Loc.set_primary" title="Permanent link">1</a><signature id="Loc.set_primary">

```lx
Loc.set_primary(language : String) : None
```
</signature>

> Set the primary language that is used as fallback if a key can't be found in another language.   

<endpoint module="luxe: string" class="Loc" signature="get_primary()"></endpoint>
<h4 class="signature_head">Loc.get_primary</h4><a class="signature-arity" href="#Loc.get_primary" title="Permanent link">1</a><signature id="Loc.get_primary">

```lx
Loc.get_primary() : unknown
```
</signature>

> Get the primary language.   

<endpoint module="luxe: string" class="Loc" signature="set_language(language : String)"></endpoint>
<h4 class="signature_head">Loc.set_language</h4><a class="signature-arity" href="#Loc.set_language" title="Permanent link">1</a><signature id="Loc.set_language">

```lx
Loc.set_language(language : String) : None
```
</signature>

> Set the current language that strings are gotten for unless specified otherwise.   

<endpoint module="luxe: string" class="Loc" signature="get_language()"></endpoint>
<h4 class="signature_head">Loc.get_language</h4><a class="signature-arity" href="#Loc.get_language" title="Permanent link">1</a><signature id="Loc.get_language">

```lx
Loc.get_language() : unknown
```
</signature>

> Get the current language.   

<endpoint module="luxe: string" class="Loc" signature="add_language(language : String, plural_form : String)"></endpoint>
<h4 class="signature_head">Loc.add_language</h4><a class="signature-arity" href="#Loc.add_language+2" title="Permanent link">2</a><signature id="Loc.add_language+2">

```lx
Loc.add_language(language : String, plural_form : String) : unknown
```
</signature>

> Add a language with the given `id` and `plural_form` expression string (just the expression part, not the whole header).   

<endpoint module="luxe: string" class="Loc" signature="add(language : String, space : String, key : String, string : String)"></endpoint>
<h4 class="signature_head">Loc.add</h4><a class="signature-arity" href="#Loc.add+4" title="Permanent link">4</a><signature id="Loc.add+4">

```lx
Loc.add(language : String, space : String, key : String, string : String) : None
```
</signature>

> Add a string to the localisation system.   

<endpoint module="luxe: string" class="Loc" signature="add_plural(language : String, space : String, key : String, strings : List)"></endpoint>
<h4 class="signature_head">Loc.add_plural</h4><a class="signature-arity" href="#Loc.add_plural+4" title="Permanent link">4</a><signature id="Loc.add_plural+4">

```lx
Loc.add_plural(language : String, space : String, key : String, strings : List) : None
```
</signature>

> Add a plural string to the localisation system.   

<endpoint module="luxe: string" class="Loc" signature="get(language : String, space : String, key : String)"></endpoint>
<h4 class="signature_head">Loc.get</h4><a class="signature-arity" href="#Loc.get+3" title="Permanent link">3</a><signature id="Loc.get+3">

```lx
Loc.get(language : String, space : String, key : String) : String
```
</signature>

> Get the string for a key (or fallback in primary language) from the localisation system for a specific language/space.   

<endpoint module="luxe: string" class="Loc" signature="has(language : String, space : String, key : String)"></endpoint>
<h4 class="signature_head">Loc.has</h4><a class="signature-arity" href="#Loc.has+3" title="Permanent link">3</a><signature id="Loc.has+3">

```lx
Loc.has(language : String, space : String, key : String) : Bool
```
</signature>

> Check if the string for a key exists in the localisation system for a specific language/space.   

<endpoint module="luxe: string" class="Loc" signature="get_plural(language : String, space : String, key : String, count : Num)"></endpoint>
<h4 class="signature_head">Loc.get_plural</h4><a class="signature-arity" href="#Loc.get_plural+4" title="Permanent link">4</a><signature id="Loc.get_plural+4">

```lx
Loc.get_plural(language : String, space : String, key : String, count : Num) : String
```
</signature>

> Get the string for a key from the localisation system for a specific language/space, with the plural count.   

<endpoint module="luxe: string" class="Loc" signature="get(space : String, key : String)"></endpoint>
<h4 class="signature_head">Loc.get</h4><a class="signature-arity" href="#Loc.get+2" title="Permanent link">2</a><signature id="Loc.get+2">

```lx
Loc.get(space : String, key : String) : String
```
</signature>

> Get the string for a key (or fallback in primary language) from the localisation system in the current language and in a specific space.   

<endpoint module="luxe: string" class="Loc" signature="get(key : String)"></endpoint>
<h4 class="signature_head">Loc.get</h4><a class="signature-arity" href="#Loc.get" title="Permanent link">1</a><signature id="Loc.get">

```lx
Loc.get(key : String) : String
```
</signature>

> Get the string for a key (or fallback in primary language) from the localisation system in the current language and in the default space.   

<endpoint module="luxe: string" class="Loc" signature="has(key : String)"></endpoint>
<h4 class="signature_head">Loc.has</h4><a class="signature-arity" href="#Loc.has" title="Permanent link">1</a><signature id="Loc.has">

```lx
Loc.has(key : String) : Bool
```
</signature>

> Check if the string for a key exists in the localisation system for the current language and default space   

<endpoint module="luxe: string" class="Loc" signature="load_primary(asset_id : String)"></endpoint>
<h4 class="signature_head">Loc.load_primary</h4><a class="signature-arity" href="#Loc.load_primary" title="Permanent link">1</a><signature id="Loc.load_primary">

```lx
Loc.load_primary(asset_id : String) : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: string" class="Loc" signature="load_language(asset_id : String)"></endpoint>
<h4 class="signature_head">Loc.load_language</h4><a class="signature-arity" href="#Loc.load_language" title="Permanent link">1</a><signature id="Loc.load_language">

```lx
Loc.load_language(asset_id : String) : Bool
```
</signature>

> no docs found   

<endpoint module="luxe: string" class="Loc" signature="load_language(asset_id : String, primary : Bool)"></endpoint>
<h4 class="signature_head">Loc.load_language</h4><a class="signature-arity" href="#Loc.load_language+2" title="Permanent link">2</a><signature id="Loc.load_language+2">

```lx
Loc.load_language(asset_id : String, primary : Bool) : Bool
```
</signature>

> no docs found   


### Str
`import "luxe: string" for Str{:lx}`
> Utility class for String functions.

- [split_lines](#Str.split_lines)(**string**: `String{:lx}`)
- [split](#Str.split+2)(**string**: `String{:lx}`, **delim**: `String{:lx}`)
- [indent_strip](#Str.indent_strip)(**string**: `String{:lx}`)
- [indent](#Str.indent)(**string**: `String{:lx}`)
- [trim](#Str.trim)(**string**: `String{:lx}`)
- [compare](#Str.compare+2)(**a**: `String{:lx}`, **b**: `String{:lx}`)
- [replace](#Str.replace+3)(**string**: `String{:lx}`, **sub**: `String{:lx}`, **repl**: `String{:lx}`)
- [is_alphanumeric](#Str.is_alphanumeric)(**str**: `String{:lx}`)
- [is_numeric](#Str.is_numeric)(**str**: `String{:lx}`)
- [increment_end](#Str.increment_end)(**string**: `String{:lx}`)
- [vec](#Str.vec)(**value**: `Vec{:lx}`)
- [vec](#Str.vec+2)(**value**: `Vec{:lx}`, **precision**: `Num{:lx}`)
- [vec](#Str.vec+3)(**value**: `Vec{:lx}`, **precision**: `Num{:lx}`, **sep**: `String{:lx}`)
- [fixed](#Str.fixed+2)(**number**: `Num{:lx}`, **precision**: `Num{:lx}`)
- [fixed](#Str.fixed)(**number**: `Num{:lx}`)
- [fixed](#Str.fixed+3)(**number**: `Num{:lx}`, **precision**: `Num{:lx}`, **padded**: `Bool{:lx}`)
- [url_encode](#Str.url_encode)(**string**: `String{:lx}`)
- [hex](#Str.hex)(**number**: `Num{:lx}`)
- [binary](#Str.binary)(**number**: `Num{:lx}`)
- [binary](#Str.binary+2)(**number**: `Num{:lx}`, **bit_width**: `Num{:lx}`)
- [path_is_absolute](#Str.path_is_absolute)(**path**: `String{:lx}`)
- [path_directory](#Str.path_directory)(**path**: `String{:lx}`)
- [path_filename](#Str.path_filename)(**path**: `String{:lx}`)
- [path_extension](#Str.path_extension)(**path**: `String{:lx}`)
- [path_extensionless](#Str.path_extensionless)(**path**: `String{:lx}`)
- [bytes_formatted](#Str.bytes_formatted)(**byte_count**: `Num{:lx}`)
- [bytes_formatted](#Str.bytes_formatted+2)(**byte_count**: `Num{:lx}`, **precision**: `Num{:lx}`)
- [upper](#Str.upper)(**string**: `String{:lx}`)
- [lower](#Str.lower)(**string**: `String{:lx}`)
- [wrap](#Str.wrap+2)(**string**: `String{:lx}`, **column**: `Num{:lx}`)
- [path](#Str.path)(**path**: `String{:lx}`)
- [strip_markup](#Str.strip_markup)(**string**: `String{:lx}`)
- [path_normalize](#Str.path_normalize)(**string**: `String{:lx}`)
- [format](#Str.format+2)(**string**: `String{:lx}`, **arg0**: `Any{:lx}`)
- [format](#Str.format+3)(**string**: `String{:lx}`, **arg0**: `Any{:lx}`, **arg1**: `Any{:lx}`)
- [format](#Str.format+4)(**string**: `String{:lx}`, **arg0**: `Any{:lx}`, **arg1**: `Any{:lx}`, **arg2**: `Any{:lx}`)
- [format](#Str.format+5)(**string**: `String{:lx}`, **arg0**: `Any{:lx}`, **arg1**: `Any{:lx}`, **arg2**: `Any{:lx}`, **arg3**: `Any{:lx}`)
- [format](#Str.format+6)(**string**: `String{:lx}`, **arg0**: `Any{:lx}`, **arg1**: `Any{:lx}`, **arg2**: `Any{:lx}`, **arg3**: `Any{:lx}`, **arg4**: `Any{:lx}`)
- [format](#Str.format+7)(**string**: `String{:lx}`, **arg0**: `Any{:lx}`, **arg1**: `Any{:lx}`, **arg2**: `Any{:lx}`, **arg3**: `Any{:lx}`, **arg4**: `Any{:lx}`, **arg5**: `Any{:lx}`)
- [format](#Str.format+8)(**string**: `String{:lx}`, **arg0**: `Any{:lx}`, **arg1**: `Any{:lx}`, **arg2**: `Any{:lx}`, **arg3**: `Any{:lx}`, **arg4**: `Any{:lx}`, **arg5**: `Any{:lx}`, **arg6**: `Any{:lx}`)
- [format](#Str.format+9)(**string**: `String{:lx}`, **arg0**: `Any{:lx}`, **arg1**: `Any{:lx}`, **arg2**: `Any{:lx}`, **arg3**: `Any{:lx}`, **arg4**: `Any{:lx}`, **arg5**: `Any{:lx}`, **arg6**: `Any{:lx}`, **arg7**: `Any{:lx}`)
- [format](#Str.format+10)(**string**: `String{:lx}`, **arg0**: `Any{:lx}`, **arg1**: `Any{:lx}`, **arg2**: `Any{:lx}`, **arg3**: `Any{:lx}`, **arg4**: `Any{:lx}`, **arg5**: `Any{:lx}`, **arg6**: `Any{:lx}`, **arg7**: `Any{:lx}`, **arg8**: `Any{:lx}`)
- [format](#Str.format+11)(**string**: `String{:lx}`, **arg0**: `Any{:lx}`, **arg1**: `Any{:lx}`, **arg2**: `Any{:lx}`, **arg3**: `Any{:lx}`, **arg4**: `Any{:lx}`, **arg5**: `Any{:lx}`, **arg6**: `Any{:lx}`, **arg7**: `Any{:lx}`, **arg8**: `Any{:lx}`, **arg9**: `Any{:lx}`)
- [format](#Str.format+12)(**string**: `String{:lx}`, **arg0**: `Any{:lx}`, **arg1**: `Any{:lx}`, **arg2**: `Any{:lx}`, **arg3**: `Any{:lx}`, **arg4**: `Any{:lx}`, **arg5**: `Any{:lx}`, **arg6**: `Any{:lx}`, **arg7**: `Any{:lx}`, **arg8**: `Any{:lx}`, **arg9**: `Any{:lx}`, **arg10**: `Any{:lx}`)
- [format](#Str.format+13)(**string**: `String{:lx}`, **arg0**: `Any{:lx}`, **arg1**: `Any{:lx}`, **arg2**: `Any{:lx}`, **arg3**: `Any{:lx}`, **arg4**: `Any{:lx}`, **arg5**: `Any{:lx}`, **arg6**: `Any{:lx}`, **arg7**: `Any{:lx}`, **arg8**: `Any{:lx}`, **arg9**: `Any{:lx}`, **arg10**: `Any{:lx}`, **arg11**: `Any{:lx}`)
- [format](#Str.format+14)(**string**: `String{:lx}`, **arg0**: `Any{:lx}`, **arg1**: `Any{:lx}`, **arg2**: `Any{:lx}`, **arg3**: `Any{:lx}`, **arg4**: `Any{:lx}`, **arg5**: `Any{:lx}`, **arg6**: `Any{:lx}`, **arg7**: `Any{:lx}`, **arg8**: `Any{:lx}`, **arg9**: `Any{:lx}`, **arg10**: `Any{:lx}`, **arg11**: `Any{:lx}`, **arg12**: `Any{:lx}`)
- [format](#Str.format+15)(**string**: `String{:lx}`, **arg0**: `Any{:lx}`, **arg1**: `Any{:lx}`, **arg2**: `Any{:lx}`, **arg3**: `Any{:lx}`, **arg4**: `Any{:lx}`, **arg5**: `Any{:lx}`, **arg6**: `Any{:lx}`, **arg7**: `Any{:lx}`, **arg8**: `Any{:lx}`, **arg9**: `Any{:lx}`, **arg10**: `Any{:lx}`, **arg11**: `Any{:lx}`, **arg12**: `Any{:lx}`, **arg13**: `Any{:lx}`)
- [format](#Str.format+16)(**string**: `String{:lx}`, **arg0**: `Any{:lx}`, **arg1**: `Any{:lx}`, **arg2**: `Any{:lx}`, **arg3**: `Any{:lx}`, **arg4**: `Any{:lx}`, **arg5**: `Any{:lx}`, **arg6**: `Any{:lx}`, **arg7**: `Any{:lx}`, **arg8**: `Any{:lx}`, **arg9**: `Any{:lx}`, **arg10**: `Any{:lx}`, **arg11**: `Any{:lx}`, **arg12**: `Any{:lx}`, **arg13**: `Any{:lx}`, **arg14**: `Any{:lx}`)
- [format_list](#Str.format_list+2)(**string**: `String{:lx}`, **args**: `List{:lx}`)
- [valid](#Str.valid)(**string**: `String{:lx}`)
- [template](#Str.template+2)(**string**: `String{:lx}`, **key_value_context**: `Map{:lx}`)


---

<endpoint module="luxe: string" class="Str" signature="split_lines(string : String)"></endpoint>
<h4 class="signature_head">Str.split_lines</h4><a class="signature-arity" href="#Str.split_lines" title="Permanent link">1</a><signature id="Str.split_lines">

```lx
Str.split_lines(string : String) : List
```
</signature>

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
<h4 class="signature_head">Str.split</h4><a class="signature-arity" href="#Str.split+2" title="Permanent link">2</a><signature id="Str.split+2">

```lx
Str.split(string : String, delim : String) : List
```
</signature>

> **Deprecated** use `string.split(delim)`
> Split a string at every occurance of an delimiter.
> 
> ```js
>     var input = "Owl eats Squirrel eats Nuts"
>     var split_string = Str.split(input, " eats ")
>     Log.print(split_string) //[Owl, Squirrel, Nuts]
> ```   

<endpoint module="luxe: string" class="Str" signature="indent_strip(string : String)"></endpoint>
<h4 class="signature_head">Str.indent_strip</h4><a class="signature-arity" href="#Str.indent_strip" title="Permanent link">1</a><signature id="Str.indent_strip">

```lx
Str.indent_strip(string : String) : String
```
</signature>

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
<h4 class="signature_head">Str.indent</h4><a class="signature-arity" href="#Str.indent" title="Permanent link">1</a><signature id="Str.indent">

```lx
Str.indent(string : String) : Num
```
</signature>

> returns how much indentation characters (whitespace or tabs) a string has.
> 
> ```js
>     var line = "\t  text"
>     var indent = Str.indent(line)
>     Log.print(indent) //3
> ```   

<endpoint module="luxe: string" class="Str" signature="trim(string : String)"></endpoint>
<h4 class="signature_head">Str.trim</h4><a class="signature-arity" href="#Str.trim" title="Permanent link">1</a><signature id="Str.trim">

```lx
Str.trim(string : String) : String
```
</signature>

> Trims whitespace characters (" ", "\n", "\t") from front and end of an string.
> Calls wren core `String.trim` internally.
> 
> ```js
>     var input = "  \n\t   Pallas's cat   \n\t  "
>     var trimmed = Str.trim(input)
>     Log.print(trimmed) //Pallas's cat
> ```   

<endpoint module="luxe: string" class="Str" signature="compare(a : String, b : String)"></endpoint>
<h4 class="signature_head">Str.compare</h4><a class="signature-arity" href="#Str.compare+2" title="Permanent link">2</a><signature id="Str.compare+2">

```lx
Str.compare(a : String, b : String) : Num
```
</signature>

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
<h4 class="signature_head">Str.replace</h4><a class="signature-arity" href="#Str.replace+3" title="Permanent link">3</a><signature id="Str.replace+3">

```lx
Str.replace(string : String, sub : String, repl : String) : String
```
</signature>

> Replace all occurances of one substring with another.
> Call wren core `String.replace` internally.
> 
> ```js
>     var input = "Hello World"
>     var replaced = Str.replace(input, "o", "ø")
>     Log.print(replaced) //Hellø Wørld
> ```   

<endpoint module="luxe: string" class="Str" signature="is_alphanumeric(str : String)"></endpoint>
<h4 class="signature_head">Str.is_alphanumeric</h4><a class="signature-arity" href="#Str.is_alphanumeric" title="Permanent link">1</a><signature id="Str.is_alphanumeric">

```lx
Str.is_alphanumeric(str : String) : Bool
```
</signature>

> Get whether all characters in a string are alphanumeric (uppercase or lowercase latin characters or arabic numerals)
> 
> ```js
>     Log.print(Str.is_alphanumeric("Leaf")) //true
>     Log.print(Str.is_alphanumeric("4Leaf")) //true
>     Log.print(Str.is_alphanumeric("4-leaf")) //false
>     Log.print(Str.is_alphanumeric("Wørld")) //false
> ```   

<endpoint module="luxe: string" class="Str" signature="is_numeric(str : String)"></endpoint>
<h4 class="signature_head">Str.is_numeric</h4><a class="signature-arity" href="#Str.is_numeric" title="Permanent link">1</a><signature id="Str.is_numeric">

```lx
Str.is_numeric(str : String) : Bool
```
</signature>

> Get whether all characters in a string are numeric (arabic numerals)
> 
> ```js
>     Log.print(Str.is_alphanumeric("Leaf")) //false
>     Log.print(Str.is_alphanumeric("4")) //true
>     Log.print(Str.is_alphanumeric("4-leaf")) //false
>     Log.print(Str.is_alphanumeric("3¾")) //false
> ```   

<endpoint module="luxe: string" class="Str" signature="increment_end(string : String)"></endpoint>
<h4 class="signature_head">Str.increment_end</h4><a class="signature-arity" href="#Str.increment_end" title="Permanent link">1</a><signature id="Str.increment_end">

```lx
Str.increment_end(string : String) : String
```
</signature>

> no docs found   

<endpoint module="luxe: string" class="Str" signature="vec(value : Vec)"></endpoint>
<h4 class="signature_head">Str.vec</h4><a class="signature-arity" href="#Str.vec" title="Permanent link">1</a><signature id="Str.vec">

```lx
Str.vec(value : Vec) : String
```
</signature>

> Get the string representation of a vector. (uses 6 digits after decimal point and spaces between numbers)   

<endpoint module="luxe: string" class="Str" signature="vec(value : Vec, precision : Num)"></endpoint>
<h4 class="signature_head">Str.vec</h4><a class="signature-arity" href="#Str.vec+2" title="Permanent link">2</a><signature id="Str.vec+2">

```lx
Str.vec(value : Vec, precision : Num) : String
```
</signature>

> Get the string representation of a vector with the specified digits after the decimal point. (puts spaces between numbers)   

<endpoint module="luxe: string" class="Str" signature="vec(value : Vec, precision : Num, sep : String)"></endpoint>
<h4 class="signature_head">Str.vec</h4><a class="signature-arity" href="#Str.vec+3" title="Permanent link">3</a><signature id="Str.vec+3">

```lx
Str.vec(value : Vec, precision : Num, sep : String) : String
```
</signature>

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
<h4 class="signature_head">Str.fixed</h4><a class="signature-arity" href="#Str.fixed+2" title="Permanent link">2</a><signature id="Str.fixed+2">

```lx
Str.fixed(number : Num, precision : Num) : String
```
</signature>

> Get the string representation of a number with a specified amount of digits after the decimal point.   

<endpoint module="luxe: string" class="Str" signature="fixed(number : Num)"></endpoint>
<h4 class="signature_head">Str.fixed</h4><a class="signature-arity" href="#Str.fixed" title="Permanent link">1</a><signature id="Str.fixed">

```lx
Str.fixed(number : Num) : String
```
</signature>

> Get the string representation of a number with 6 digits after the decimal points.   

<endpoint module="luxe: string" class="Str" signature="fixed(number : Num, precision : Num, padded : Bool)"></endpoint>
<h4 class="signature_head">Str.fixed</h4><a class="signature-arity" href="#Str.fixed+3" title="Permanent link">3</a><signature id="Str.fixed+3">

```lx
Str.fixed(number : Num, precision : Num, padded : Bool) : String
```
</signature>

> Get the string representation of a number with a specified amount of digits after the decimal point.
> If padded is true, this function adds zeroes until the requested amount of digits after the decimal point is reached.   

<endpoint module="luxe: string" class="Str" signature="url_encode(string : String)"></endpoint>
<h4 class="signature_head">Str.url_encode</h4><a class="signature-arity" href="#Str.url_encode" title="Permanent link">1</a><signature id="Str.url_encode">

```lx
Str.url_encode(string : String) : String
```
</signature>

> no docs found   

<endpoint module="luxe: string" class="Str" signature="hex(number : Num)"></endpoint>
<h4 class="signature_head">Str.hex</h4><a class="signature-arity" href="#Str.hex" title="Permanent link">1</a><signature id="Str.hex">

```lx
Str.hex(number : Num) : String
```
</signature>

> Get string representation of number in base-16/hexadecimal.   

<endpoint module="luxe: string" class="Str" signature="binary(number : Num)"></endpoint>
<h4 class="signature_head">Str.binary</h4><a class="signature-arity" href="#Str.binary" title="Permanent link">1</a><signature id="Str.binary">

```lx
Str.binary(number : Num) : String
```
</signature>

> Get string representation of number in base-2/binary.   

<endpoint module="luxe: string" class="Str" signature="binary(number : Num, bit_width : Num)"></endpoint>
<h4 class="signature_head">Str.binary</h4><a class="signature-arity" href="#Str.binary+2" title="Permanent link">2</a><signature id="Str.binary+2">

```lx
Str.binary(number : Num, bit_width : Num) : String
```
</signature>

> Get string representation of (positive integer) number in base-2/binary.
> `bit_width` declares to how many digits the number should be expanded (adds zeroes to left of it).   

<endpoint module="luxe: string" class="Str" signature="path_is_absolute(path : String)"></endpoint>
<h4 class="signature_head">Str.path_is_absolute</h4><a class="signature-arity" href="#Str.path_is_absolute" title="Permanent link">1</a><signature id="Str.path_is_absolute">

```lx
Str.path_is_absolute(path : String) : Bool
```
</signature>

> Get whether a path is absolute (instead of relative).   

<endpoint module="luxe: string" class="Str" signature="path_directory(path : String)"></endpoint>
<h4 class="signature_head">Str.path_directory</h4><a class="signature-arity" href="#Str.path_directory" title="Permanent link">1</a><signature id="Str.path_directory">

```lx
Str.path_directory(path : String) : String
```
</signature>

> Get the directory path of a path pointing to a file.   

<endpoint module="luxe: string" class="Str" signature="path_filename(path : String)"></endpoint>
<h4 class="signature_head">Str.path_filename</h4><a class="signature-arity" href="#Str.path_filename" title="Permanent link">1</a><signature id="Str.path_filename">

```lx
Str.path_filename(path : String) : String
```
</signature>

> Get the filename (including extension) of a path pointing to a file.   

<endpoint module="luxe: string" class="Str" signature="path_extension(path : String)"></endpoint>
<h4 class="signature_head">Str.path_extension</h4><a class="signature-arity" href="#Str.path_extension" title="Permanent link">1</a><signature id="Str.path_extension">

```lx
Str.path_extension(path : String) : String
```
</signature>

> Get the extension of a path pointing to a file.   

<endpoint module="luxe: string" class="Str" signature="path_extensionless(path : String)"></endpoint>
<h4 class="signature_head">Str.path_extensionless</h4><a class="signature-arity" href="#Str.path_extensionless" title="Permanent link">1</a><signature id="Str.path_extensionless">

```lx
Str.path_extensionless(path : String) : String
```
</signature>

> Get the filename (excluding extension) of a path pointing to a file.   

<endpoint module="luxe: string" class="Str" signature="bytes_formatted(byte_count : Num)"></endpoint>
<h4 class="signature_head">Str.bytes_formatted</h4><a class="signature-arity" href="#Str.bytes_formatted" title="Permanent link">1</a><signature id="Str.bytes_formatted">

```lx
Str.bytes_formatted(byte_count : Num) : String
```
</signature>

> Get a byte size as bytes/KB/MB/GB/TB (whichever is the biggest unit that is at least 1) with 3 digits after the decimal place.   

<endpoint module="luxe: string" class="Str" signature="bytes_formatted(byte_count : Num, precision : Num)"></endpoint>
<h4 class="signature_head">Str.bytes_formatted</h4><a class="signature-arity" href="#Str.bytes_formatted+2" title="Permanent link">2</a><signature id="Str.bytes_formatted+2">

```lx
Str.bytes_formatted(byte_count : Num, precision : Num) : String
```
</signature>

> Get a byte size as bytes/KB/MB/GB/TB (whichever is the biggest unit that is at least 1) with `precision` digits after the decimal place.   

<endpoint module="luxe: string" class="Str" signature="upper(string : String)"></endpoint>
<h4 class="signature_head">Str.upper</h4><a class="signature-arity" href="#Str.upper" title="Permanent link">1</a><signature id="Str.upper">

```lx
Str.upper(string : String) : String
```
</signature>

> Converts a string to all uppercase.   

<endpoint module="luxe: string" class="Str" signature="lower(string : String)"></endpoint>
<h4 class="signature_head">Str.lower</h4><a class="signature-arity" href="#Str.lower" title="Permanent link">1</a><signature id="Str.lower">

```lx
Str.lower(string : String) : String
```
</signature>

> Converts a string to all lowercase.   

<endpoint module="luxe: string" class="Str" signature="wrap(string : String, column : Num)"></endpoint>
<h4 class="signature_head">Str.wrap</h4><a class="signature-arity" href="#Str.wrap+2" title="Permanent link">2</a><signature id="Str.wrap+2">

```lx
Str.wrap(string : String, column : Num) : String
```
</signature>

> Wraps text on spaces to keep line length within column width. Does not break words that are longer than column width.   

<endpoint module="luxe: string" class="Str" signature="path(path : String)"></endpoint>
<h4 class="signature_head">Str.path</h4><a class="signature-arity" href="#Str.path" title="Permanent link">1</a><signature id="Str.path">

```lx
Str.path(path : String) : String
```
</signature>

> Normalize a path.   

<endpoint module="luxe: string" class="Str" signature="strip_markup(string : String)"></endpoint>
<h4 class="signature_head">Str.strip_markup</h4><a class="signature-arity" href="#Str.strip_markup" title="Permanent link">1</a><signature id="Str.strip_markup">

```lx
Str.strip_markup(string : String) : String
```
</signature>

> Strips the luxe markup formatting from the given string, returning the raw value   

<endpoint module="luxe: string" class="Str" signature="path_normalize(string : String)"></endpoint>
<h4 class="signature_head">Str.path_normalize</h4><a class="signature-arity" href="#Str.path_normalize" title="Permanent link">1</a><signature id="Str.path_normalize">

```lx
Str.path_normalize(string : String) : String
```
</signature>

> Normalizes the path also resolving ../ and ./ and so on   

<endpoint module="luxe: string" class="Str" signature="format(string : String, arg0 : Any)"></endpoint>
<h4 class="signature_head">Str.format</h4><a class="signature-arity" href="#Str.format+2" title="Permanent link">2</a><signature id="Str.format+2">

```lx
Str.format(string : String, arg0 : Any) : String
```
</signature>

> no docs found   

<endpoint module="luxe: string" class="Str" signature="format(string : String, arg0 : Any, arg1 : Any)"></endpoint>
<h4 class="signature_head">Str.format</h4><a class="signature-arity" href="#Str.format+3" title="Permanent link">3</a><signature id="Str.format+3">

```lx
Str.format(string : String, arg0 : Any, arg1 : Any) : String
```
</signature>

> no docs found   

<endpoint module="luxe: string" class="Str" signature="format(string : String, arg0 : Any, arg1 : Any, arg2 : Any)"></endpoint>
<h4 class="signature_head">Str.format</h4><a class="signature-arity" href="#Str.format+4" title="Permanent link">4</a><signature id="Str.format+4">

```lx
Str.format(string : String, arg0 : Any, arg1 : Any, arg2 : Any) : String
```
</signature>

> no docs found   

<endpoint module="luxe: string" class="Str" signature="format(string : String, arg0 : Any, arg1 : Any, arg2 : Any, arg3 : Any)"></endpoint>
<h4 class="signature_head">Str.format</h4><a class="signature-arity" href="#Str.format+5" title="Permanent link">5</a><signature id="Str.format+5">

```lx
Str.format(string : String, arg0 : Any, arg1 : Any, arg2 : Any, arg3 : Any) : String
```
</signature>

> no docs found   

<endpoint module="luxe: string" class="Str" signature="format(string : String, arg0 : Any, arg1 : Any, arg2 : Any, arg3 : Any, arg4 : Any)"></endpoint>
<h4 class="signature_head">Str.format</h4><a class="signature-arity" href="#Str.format+6" title="Permanent link">6</a><signature id="Str.format+6">

```lx
Str.format(string : String, arg0 : Any, arg1 : Any, arg2 : Any, arg3 : Any, arg4 : Any) : String
```
</signature>

> no docs found   

<endpoint module="luxe: string" class="Str" signature="format(string : String, arg0 : Any, arg1 : Any, arg2 : Any, arg3 : Any, arg4 : Any, arg5 : Any)"></endpoint>
<h4 class="signature_head">Str.format</h4><a class="signature-arity" href="#Str.format+7" title="Permanent link">7</a><signature id="Str.format+7">

```lx
Str.format(string : String, arg0 : Any, arg1 : Any, arg2 : Any, arg3 : Any, arg4 : Any, arg5 : Any) : String
```
</signature>

> no docs found   

<endpoint module="luxe: string" class="Str" signature="format(string : String, arg0 : Any, arg1 : Any, arg2 : Any, arg3 : Any, arg4 : Any, arg5 : Any, arg6 : Any)"></endpoint>
<h4 class="signature_head">Str.format</h4><a class="signature-arity" href="#Str.format+8" title="Permanent link">8</a><signature id="Str.format+8">

```lx
Str.format(string : String, arg0 : Any, arg1 : Any, arg2 : Any, arg3 : Any, arg4 : Any, arg5 : Any, arg6 : Any) : String
```
</signature>

> no docs found   

<endpoint module="luxe: string" class="Str" signature="format(string : String, arg0 : Any, arg1 : Any, arg2 : Any, arg3 : Any, arg4 : Any, arg5 : Any, arg6 : Any, arg7 : Any)"></endpoint>
<h4 class="signature_head">Str.format</h4><a class="signature-arity" href="#Str.format+9" title="Permanent link">9</a><signature id="Str.format+9">

```lx
Str.format(string : String, arg0 : Any, arg1 : Any, arg2 : Any, arg3 : Any, arg4 : Any, arg5 : Any, arg6 : Any, arg7 : Any) : String
```
</signature>

> no docs found   

<endpoint module="luxe: string" class="Str" signature="format(string : String, arg0 : Any, arg1 : Any, arg2 : Any, arg3 : Any, arg4 : Any, arg5 : Any, arg6 : Any, arg7 : Any, arg8 : Any)"></endpoint>
<h4 class="signature_head">Str.format</h4><a class="signature-arity" href="#Str.format+10" title="Permanent link">10</a><signature id="Str.format+10">

```lx
Str.format(string : String, arg0 : Any, arg1 : Any, arg2 : Any, arg3 : Any, arg4 : Any, arg5 : Any, arg6 : Any, arg7 : Any, arg8 : Any) : String
```
</signature>

> no docs found   

<endpoint module="luxe: string" class="Str" signature="format(string : String, arg0 : Any, arg1 : Any, arg2 : Any, arg3 : Any, arg4 : Any, arg5 : Any, arg6 : Any, arg7 : Any, arg8 : Any, arg9 : Any)"></endpoint>
<h4 class="signature_head">Str.format</h4><a class="signature-arity" href="#Str.format+11" title="Permanent link">11</a><signature id="Str.format+11">

```lx
Str.format(string : String, arg0 : Any, arg1 : Any, arg2 : Any, arg3 : Any, arg4 : Any, arg5 : Any, arg6 : Any, arg7 : Any, arg8 : Any, arg9 : Any) : String
```
</signature>

> no docs found   

<endpoint module="luxe: string" class="Str" signature="format(string : String, arg0 : Any, arg1 : Any, arg2 : Any, arg3 : Any, arg4 : Any, arg5 : Any, arg6 : Any, arg7 : Any, arg8 : Any, arg9 : Any, arg10 : Any)"></endpoint>
<h4 class="signature_head">Str.format</h4><a class="signature-arity" href="#Str.format+12" title="Permanent link">12</a><signature id="Str.format+12">

```lx
Str.format(string : String, arg0 : Any, arg1 : Any, arg2 : Any, arg3 : Any, arg4 : Any, arg5 : Any, arg6 : Any, arg7 : Any, arg8 : Any, arg9 : Any, arg10 : Any) : String
```
</signature>

> no docs found   

<endpoint module="luxe: string" class="Str" signature="format(string : String, arg0 : Any, arg1 : Any, arg2 : Any, arg3 : Any, arg4 : Any, arg5 : Any, arg6 : Any, arg7 : Any, arg8 : Any, arg9 : Any, arg10 : Any, arg11 : Any)"></endpoint>
<h4 class="signature_head">Str.format</h4><a class="signature-arity" href="#Str.format+13" title="Permanent link">13</a><signature id="Str.format+13">

```lx
Str.format(string : String, arg0 : Any, arg1 : Any, arg2 : Any, arg3 : Any, arg4 : Any, arg5 : Any, arg6 : Any, arg7 : Any, arg8 : Any, arg9 : Any, arg10 : Any, arg11 : Any) : String
```
</signature>

> no docs found   

<endpoint module="luxe: string" class="Str" signature="format(string : String, arg0 : Any, arg1 : Any, arg2 : Any, arg3 : Any, arg4 : Any, arg5 : Any, arg6 : Any, arg7 : Any, arg8 : Any, arg9 : Any, arg10 : Any, arg11 : Any, arg12 : Any)"></endpoint>
<h4 class="signature_head">Str.format</h4><a class="signature-arity" href="#Str.format+14" title="Permanent link">14</a><signature id="Str.format+14">

```lx
Str.format(string : String, arg0 : Any, arg1 : Any, arg2 : Any, arg3 : Any, arg4 : Any, arg5 : Any, arg6 : Any, arg7 : Any, arg8 : Any, arg9 : Any, arg10 : Any, arg11 : Any, arg12 : Any) : String
```
</signature>

> no docs found   

<endpoint module="luxe: string" class="Str" signature="format(string : String, arg0 : Any, arg1 : Any, arg2 : Any, arg3 : Any, arg4 : Any, arg5 : Any, arg6 : Any, arg7 : Any, arg8 : Any, arg9 : Any, arg10 : Any, arg11 : Any, arg12 : Any, arg13 : Any)"></endpoint>
<h4 class="signature_head">Str.format</h4><a class="signature-arity" href="#Str.format+15" title="Permanent link">15</a><signature id="Str.format+15">

```lx
Str.format(string : String, arg0 : Any, arg1 : Any, arg2 : Any, arg3 : Any, arg4 : Any, arg5 : Any, arg6 : Any, arg7 : Any, arg8 : Any, arg9 : Any, arg10 : Any, arg11 : Any, arg12 : Any, arg13 : Any) : String
```
</signature>

> no docs found   

<endpoint module="luxe: string" class="Str" signature="format(string : String, arg0 : Any, arg1 : Any, arg2 : Any, arg3 : Any, arg4 : Any, arg5 : Any, arg6 : Any, arg7 : Any, arg8 : Any, arg9 : Any, arg10 : Any, arg11 : Any, arg12 : Any, arg13 : Any, arg14 : Any)"></endpoint>
<h4 class="signature_head">Str.format</h4><a class="signature-arity" href="#Str.format+16" title="Permanent link">16</a><signature id="Str.format+16">

```lx
Str.format(string : String, arg0 : Any, arg1 : Any, arg2 : Any, arg3 : Any, arg4 : Any, arg5 : Any, arg6 : Any, arg7 : Any, arg8 : Any, arg9 : Any, arg10 : Any, arg11 : Any, arg12 : Any, arg13 : Any, arg14 : Any) : String
```
</signature>

> no docs found   

<endpoint module="luxe: string" class="Str" signature="format_list(string : String, args : List)"></endpoint>
<h4 class="signature_head">Str.format_list</h4><a class="signature-arity" href="#Str.format_list+2" title="Permanent link">2</a><signature id="Str.format_list+2">

```lx
Str.format_list(string : String, args : List) : String
```
</signature>

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
<h4 class="signature_head">Str.valid</h4><a class="signature-arity" href="#Str.valid" title="Permanent link">1</a><signature id="Str.valid">

```lx
Str.valid(string : String) : Bool
```
</signature>

> Check if string is null or empty   

<endpoint module="luxe: string" class="Str" signature="template(string : String, key_value_context : Map)"></endpoint>
<h4 class="signature_head">Str.template</h4><a class="signature-arity" href="#Str.template+2" title="Permanent link">2</a><signature id="Str.template+2">

```lx
Str.template(string : String, key_value_context : Map) : unknown
```
</signature>

> A simple templating helper. Replace parts of the text with data from a given context map, by simple (non nested) string keys.
> For example, given the string `"hello <[user.name]>"` we can do `Str.template(string, {"user.name": name})`.
> The keys are delimited with `<[` and ended with `]>` in the string. Any not matched, won't be replaced.
> If you have a wren map with nested values, `LX.flatten()` can convert to simple key values for you.
> Values in the map are converted with `toString` if not a string.
> 
> ```js
>   Log.print(Str.template("hello <[user.name]>", {"user.name" : "luxe"})) //hello luxe
> ```   

