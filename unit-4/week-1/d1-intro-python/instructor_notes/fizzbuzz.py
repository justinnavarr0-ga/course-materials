def fizz_buzz(max_num):
  # This is how to write a
  # single line comment
  '''
  This is how to write a
  multiline comment 
  '''
  for num in range(1, max_num):
  # for (let num = 1; num < max_num; num++)
    if num % 3 == 0 and num % 5 == 0:
      print('{} is FizzBuzz'.format(num))
      # num + " is FizzBuzz"
    elif num % 3 == 0:
      print(f'{num} is Fizz')
    elif num % 5 == 0:
      print(f'{num} is Buzz')
    else:
      print(num)

fizz_buzz(31)