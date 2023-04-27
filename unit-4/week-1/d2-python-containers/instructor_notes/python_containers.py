'''
DICTIONARIES
'''

student = {
  'name': 'Maria T',
  'course': 'SEI BTY',
  'current_week': 10
}

# print(student.get('skills', {'HTML': 5, 'JAVASCRIPT': 5}))
# print(student.get('skills'))

# del student['course']

# if 'course' in student:
#   print( f"{student['name']} is enrolled in {student['course']}")
# else:
#   print( f"{student['name']} is not enrolled in a course")

# student['graduated'] = 'YESSSS'

# --NOT THE BEST WAY--
# for key in student:
#   print( f"{key} = {student[key]}" )

# --A BETTER WAY--
# for student_item in student.items():
#   print( f"{student_item[0]} = {student_item[1]}" )

# --DA BEST WAY--
# for key, value in student.items():
#   print(f"{key} = {value}")

# PRACTICE
where_my_things_are = {
  'car keys': 'on the counter',
  'water bottle': 'on the desk',
  'phone': 'in my pocket'
}

# for thing, location in where_my_things_are.items():
#   print(f"My {thing} is kept {location}")

'''
LISTS
'''

colors = ['red', 'green', 'blue']
colors.append('purple')
colors.extend(['yellow', 'brown'])
colors.insert(2, 'greenish-blue')

# for color in colors:
  # print(color)

# for idx, color in enumerate(colors):
#   print(idx, color)

odds = [1, 3, 5]
evens = [2, 4, 6]
nums = odds + evens

# LIST PRACTICE
scores = [
  {
    'name': 'Kelli',
    'points': 25  # points the player scored
  }
]

scores.append({
  'name': 'Evan',
  'points': 30
})

# for score in scores:
#   print(f"{score['name']} scored {score['points']} points")

'''
COMPREHENSIONS
'''
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

squares = [num * num for num in nums]

even_squares = [num * num for num in nums if (num * num) % 2 == 0]

'''
TUPLES
'''
colors = 'red', 'green', 'blue'

short_name = 'Kendall'[0:3]

chars = ['a', 'b', 'x', 'y', 'd']
chars[2:4] = 'c'
print(chars)