## Welcome to Math.js

With this framework you can work with Mathematical examples with HTML codes. The framework for this framework is very simple.

With the Math.js framework you can perform various mathematical calculations.

### Math.js syntax

You can use this framework via html you don't need any js.

```markdown
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="mathjsv1.9.8.js"></script>
    <title>Document</title>
</head>
<body>
    <input id="math_app" get:method="sqrt" value="12" view-in="#val">
    <!-- <sqrt></sqrt> -->
    <!-- <h1></h1> -->
    <p style="color: red;" id="val"></p>
    <round get:val="2.5"></round><br>
    <PI></PI><br>
    <E></E><br>
    <pow get:val="8" pow:grade="2"></pow><br>
    <sin get:val="0.2"></sin><br>
    <trunc get:val="12"></trunc><br>
    <view get:view="12-2"></view>
</body> 
</html>
```
### Any tags use in Math.js
With <code>sqr</code>, you can calc the square of the number. Write value in the <code>sqr</code> tag.
```markdown
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="mathjsv1.9.8.js"></script>
    <title>Document</title>
</head>
<body>
  <sqr get:val="5"></sqr>
  <!--value: 25-->
</body> 
</html>
```
With <code>sqrt</code>, you can calc the root value of the number. Write value in the <code>sqrt</code> tag.
```markdown
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="mathjsv2.4.6.js"></script>
    <title>Document</title>
</head>
<body>
  <sq s:a="2" s:b="3"></sq>
  <!--value: 6-->
</body> 
</html>
```
 ### Any tags in Math.js
<table align="center">
  <tr>
    <th style="width:20%">Tag</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>abs</code></td>
    <td>Returns the absolute value of x</td>
  </tr>
  <tr>
    <td><code>acos</code></td>
    <td>Returns the arccosine of x, in radians</td>
  </tr>
  <tr>
    <td><code>acosh</code></td>
    <td>Returns the hyperbolic arccosine of x</td>
  </tr>
  <tr>
    <td><code>asin</code></td>
    <td>Returns the arcsine of x, in radians</td>
  </tr>
  <tr>
    <td><code>asinh</code></td>
    <td>Returns the hyperbolic arcsine of x</td>
  </tr>
  <tr>
    <td><code>atan</code></td>
    <td>Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians</td>
  </tr>
  <tr>
    <td><code>atan2</code></td>
    <td>Returns the arctangent of the qucodeotient of its arguments</td>
  </tr>
  <tr>
    <td><code>atanh</code></td>
    <td>Returns the hyperbolic arctangent of x</td>
  </tr>
  <tr>
    <td><code>cbrt</code></td>
    <td>Returns the cubic root of x</td>
  </tr>
  <tr>
    <td><code>ceil</code></td>
    <td>Returns x, rounded upwards to the nearest integer</td>
  </tr>
  <tr>
    <td><code>cos</code></td>
    <td>Returns the cosine of x (x is in radians)</td>
  </tr>
  <tr>
    <td><code>cosh</code></td>
    <td>Returns the hyperbolic cosine of x</td>
  </tr>
  <tr>
    <td><code>exp</a></td>
    <td>Returns the value of E<sup>x</sup></td>
  </tr>
  <tr>
    <td><code>floor</code></td>
    <td>Returns x, rounded downwards to the nearest integer</td>
  </tr>
  <tr>
    <td><code>log</code></td>
    <td>Returns the natural logarithm (base E) of x</td>
  </tr>
  <tr>
    <td><code>pow</code></td>
    <td>Returns the value of x to the power of y</td>
  </tr>
  <tr>
    <td><code>random</code></td>
    <td>Returns a random number between 0 and 1</td>
  </tr>
  <tr>
    <td><code>round</code></td>
    <td>Rounds x to the nearest integer</td>
  </tr>
  <tr>
    <td><code>sin</code></td>
    <td>Returns the sine of x (x is in radians)</td>
  </tr>
  <tr>
    <td><code>sinh</code></td>
    <td>Returns the hyperbolic sine of x</td>
  </tr>
  <tr>
    <td><code>sqrt</code></td>
    <td>Returns the square root of x</td>
  </tr>
  <tr>
    <td><code>tan</code></td>
    <td>Returns the tangent of an angle</td>
  </tr>
  <tr>
    <td><code>tanh</code></td>
    <td>Returns the hyperbolic tangent of a number</td>
  </tr>
  <tr>
    <td><code>trunc</code></td>
    <td>Returns the integer part of a number (x)</td>
  </tr>
   <tr>
    <td><code>per</code></td>
    <td>Returns the perimeter of a right rectangle</td>
  </tr>
     <tr>
    <td><code>sq</code></td>
    <td>Returns the square of a right rectangle</td>
  </tr>
       <tr>
    <td><code>mod</code></td>
    <td>Returns the number module value</td>
  </tr>
         <tr>
    <td><code>v</code></td>
    <td>Returns the vocume</td>
  </tr>
  </table>
  
### How to use attr get:val
you can get a numeric value in any tag using the get:val attribute. Example:

```markdown
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="mathjsv2.4.6.js"></script>
    <title>Document</title>
</head>
<body>
  <abs get:val="-22"></abs>
  <!--value: 22-->
</body> 
</html>
```
### How to use `per`, `sq` and `v` tags
You can use the per tag to find the perimeter of a right rectangle. You can use the per tag to find the perimeter of a right rectangle. You enter the rectangular side values using the attributes p:a and p:b. You can use the sq tag to find the square of a right rectangle. You can use the per tag to find the perimeter of a right rectangle. You enter the rectangular side values using the attributes s:a and s:b. You can use the v tag to find the vocume of a paralapepidright rectangle. You enter the rectangular side values using the attributes v:s and v:h. Example:
```markdown
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="mathjsv2.4.6.js"></script>
    <title>Document</title>
</head>
<body>
  <sq s:a="2" s:b="3"></sq><br>
  <!--value: 6-->
  <per p:a="2" p:b="3"></per>
  <!--value: 12-->
  <v p:a="2" p:b="3"></v>
  <!--value: 6-->
</body> 
</html>
```
### How tu use `pow` tag
You use the pow tag to find the level of any number. You use the pow tag to find the level of any number. You use the pow:grade attribute to enter the degree value. Example:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="mathjsv2.4.6.js"></script>
    <title>Document</title>
</head>
<body>
  <pow get:val="8" pow:grade="2"></pow>
  <!--value: 64-->
</body> 
</html>
```
### Numbers
There are some numbers in Math.js:
```markdown
e       // returns Euler's number
pi       // returns PI
sqrt2    // returns the square root of 2
sqrt1/2  // returns the square root of 1/2
ln2      // returns the natural logarithm of 2
ln10     // returns the natural logarithm of 10
log2e    // returns base 2 logarithm of E
log10e   // returns base 10 logarithm of E
```
Example:
```markdown
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="mathjsv2.4.6.js"></script>
    <title>Document</title>
</head>
<body>
  <pi></pi>
  <!--value: 3.141592653589793-->
</body> 
</html>
```
### Author: Jahongir Sobirov

I am a frontend developer. I know jquery, vue.js, js, html5, css3 and bootstrap.

### Support or Contact

My email: Jahongir.Sobirov.2007@mail.ru
