<meta charset="utf-8">
<?php


echo '<br>1. Объявить две целочисленные переменные $a и $b и задать им произвольные начальные значения. <br>
если $a и $b положительные, вывести их разность;<br>
если $а и $b отрицательные, вывести их произведение;<br>
если $а и $b разных знаков, вывести их сумму;<br>';
$a = rand(-10, 10);
$b = rand(-10, 10);

echo "Числа $a и $b,  ";

echo ($a > 0 && $b > 0) ? '$a и $b' . " положительные, разность  " . ($a - $b) : (($a < 0 && $b < 0) ? '$a и $b' . " отрицательные, произведение  " . ($a * $b) : (($a * $b < 0) ? '$a и $b' . " разных знаков, сумма  " . ($a + $b) :
    "что то не так <br>"));

// выражение должно быть в скобках после двоеточия.

//echo "2. Присвоить переменной $а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от $a до 15." 

echo "<hr><br>";
$a = rand(0, 15);
echo '2. Присвоить переменной $а' . " значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от $a до 15.";

echo "<br> " . $a . "-число";

function  check_15($n, $p)
{  // рекурсивная функция убывания на 1 

    if ($n > $p) {
        echo "|" . $n . "|";
        $n = check_15($n - 1, $p) . "<br>";
    }
};

echo "<br>числа от $a до 15" . "<br>";
switch ($a) {
    case ($a):
        echo check_15(15, $a);
        break;
};


echo "<hr><br>";
echo "3. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.Обязательно использовать оператор return.";
echo "<br>числа $a и $b <br>";

function plus1($a, $b)
{
    $a = $a + $b;
    return $a;
};

function mines1($a, $b)
{
    $a = $a - $b;
    return $a;
};

function div1($a, $b)
{
    if ($b !== 0) {
        $a = ($a / $b);
    } else {
        $a = "попытка деления на ноль";
    }
    //return ($b!=0)?$a = ($a / $b) : echo " попытка деления на ноль";);
    return $a;
};

function mult1($a, $b)
{
    $a = $a * $b;
    return $a;
};

//$c = '$a,$b';
echo plus1($a, $b) . " - сложение <br>";
echo mines1($a, $b) . " - вычитание <br>";
echo mult1($a, $b) . " - умножени <br>";
echo div1($a, $b) . " - деление <br>";



echo "<hr><br>";
echo '4. Реализовать функцию с тремя параметрами: function mathOperation($arg1, $arg2, $operation)'."<br>";
function mathOperation1($arg1, $arg2, $operation)
{
    switch ($operation) {
        case "+":
            return plus1($arg1, $arg2);
            break;
        case "-":
            return mines1($arg1, $arg2);
            break;
        case "*":
            return mult1($arg1, $arg2);
            break;
        case "/":
            return div1($arg1, $arg2);
            break;
    };
};

echo 'функция mathOperation ' . " числа $a и $b <br>";
echo mathOperation1($a, $b, '+') . " - операция + <br>";
echo mathOperation1($a, $b, '-') . " - операция - <br>";
echo mathOperation1($a, $b, '*') . " - операция * <br>";
echo mathOperation1($a, $b, '/') . " - операция / <br>";


echo "<hr><br>";
//echo "5. Посмотреть на встроенные функции PHP. Используя имеющийся HTML шаблон, вывести текущий год в подвале при помощи встроенных функций PHP.";

echo "<a href='index2.php'>5. Посмотреть на встроенные функции PHP. Используя имеющийся HTML шаблон, вывести текущий год в подвале при помощи встроенных функций PHP.</a>";



echo "<hr><br>";

echo '6. *С помощью рекурсии организовать функцию возведения числа в степень. Формат: functionpower($val, $pow), где $val – заданное число, $pow – cтепень.' . "<br>";

$a = rand(-10, 10);
$b = rand(-5, 5);

function power($val, $pow)
{

    echo "|" . $val . "|";

    return ($val == 0 && $pow < 0) ? NAN : (($pow == 0) ? $val = 1 : (($pow == 1) ? $val : (($pow < 0) ? 1 / $val * power($val, $pow + 1) : $val * power($val, $pow - 1))));

    // если знач.=0 и степень отр. то ошибка , если степень 0 то 1, если степень 1 то знач. , если степень меньше 0 и знач. неравно 0 то 1/знач*, иначе знач.*знач..
};

//$a=0;
//$b=-5;

echo "<br>Функция power, число $a возводим в степень $b, результат " . power($a, $b);


echo "<hr><br>";
echo "7. *Написать функцию, которая вычисляет текущее время и возвращает его в формате с правильными склонениями, например: 22 часа 15 минут, 21 час 43 минуты<br>";

function currentTime () {

    $nowMin =(int)date( 'i');
    $nowMin =51;
    $nowHour =(int)date ('H');
    $nowHour=23;
    $hourStr="";
    $minStr="";
       
    $nowMin1=(int)$nowMin%10; //единицы, разряд
    //$nowMin10=$nowMin1+10; 
    
  
    ($nowHour==0 || ($nowHour>=5 && $nowHour<=20))? $hourStr=' часов':(($nowHour==21||$nowHour==1)? $hourStr=' час':$hourStr=' часа');
    ($nowMin1==0 || $nowMin1>4 || ($nowMin>4 && $nowMin<21))? $minStr=' минут':(($nowMin1==1)? $minStr=' минута':$minStr=' минуты'); 
    
 //var_dump( $nowMin10);   
 //var_dump($nowMin1);
 //var_dump($nowMin);
    echo " <br> время " . $nowHour ." $hourStr" .":". $nowMin ."$minStr ";  
    
};

currentTime();

