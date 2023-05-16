# def fahr_to_kelvin(temp):
#   return ((temp- 32) * (5/9)) + 273.15

# function someFunction(){
    
# }

def first_function():
    pass

result = first_function()
# print(result)

# const anotherFunction = function(){
    
# }

# const myFunction = () => {
    
# }

def add(a, b):
  return a + b

def subtract(a, b):
  return a - b

math_operations = {
  '+': add,
  '-': subtract
}
selected_operation = '+'
# print(math_operations[selected_operation](2, 4))
nums = [1, 3, 2, 6, 5]
# let odds = nums.filter(num => num % 2);

odds = list(filter(lambda num: num % 2, nums))
# print(odds)  

def compute(a, b, op):
  return op(a, b)

# print(compute(1, 2, add))
def add(a, b):
  return a + b
  
# add(1)

def fn(*args):
  print( type(args) )
  for arg in args:
    print(arg)

# fn(1, 2, 'SEI')

def dev_skills(dev_name, *args):
  dev = {'name': dev_name, 'skills': []}
  # args will be a tuple
  for skill in args:
    dev['skills'].append(skill)
  return dev

def dev_skills(dev_name, *args):
  dev = {'name': dev_name, 'skills': list(args)}
  return dev

# print(dev_skills('Alex', 'HTML', 'CSS'))
def divide(a, b):
  return f'{a} divided by {b} is {a / b}'

# print(divide(b=25, a=100))

def dev_skills(dev_name, **kwargs):
  # kwargs will be a dictionary!
  print(kwargs)
  dev = {'name': dev_name, 'skills': kwargs}
  return dev

# print(dev_skills('Jackie', HTML=5, CSS=3, JavaScript=4, Python=2))

def arg_demo(pos1, pos2, *args, **kwargs):
  print(f'Positional params: {pos1}, {pos2}')
  print('*args:')
  for arg in args:
    print(' ', arg)
  print('**kwargs:')
  for keyword, value in kwargs.items():
    print(f'  {keyword}: {value}')

# arg_demo('A', 'B', 1, 2, 3, color='purple', shape='circle')

def dev_skills(dev_name, **kwargs):
  print(kwargs)
  dev = {'name': dev_name, 'skills': []}
  return dev

# print(dev_skills('Kendall', skill='HTML', skill='CSS', project="brainwave"))

def get_category(points):
  if points > 900:
    return 'Gold Member'
  elif points > 800:
    return 'Silver Member'
  else:
    return 'Bronze Member'

print( get_category(850) )