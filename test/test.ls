com = require "../dist/main"

{l,zj,z,binapi,print_fail} = com

fail = print_fail "test/test.js"

# ------- ----------------------------------------------------------------------------------

# <| TEST 1 |>

lopo = (state) -> binapi fun,get,state

get = (state,key) ->
  state[key] = true
  state

fun = (state,args) -> lopo state

P = binapi fun,get,{}


K = P.flip.callback!

if not (K.flip or K.callback)

  fail 1

# <| TEST 2 to 4 |>

subtract = (state,args) ->

  [a,b] = args

  if state.flip # flip arguments

    temporary = a

    a = b

    b = temporary

  output = a - b

  if state.abs # output only absolute value

    return Math.abs output

  return output

sub  = binapi subtract,get,{}

# <| TEST 2 |>

if not ((sub 10,5) is 5)

  fail 2

# # <| TEST 3 |>

if not ((sub.flip.subtract 10,5 ) is -5)

  fail 3

# # <| TEST 4 |>

if not ((sub.flip.abs 10,5) is 5)

  fail 4
