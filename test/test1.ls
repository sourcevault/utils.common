com = require "../dist/main"

{l,z,binapi} = com

fail = com.print_fail "test/test1.js"

# ------- ----------------------------------------------------------------------------------

# <| TEST 6 |>

# complex monadic api example from readme

get = ([old,num],key) -> [key,num]


lopo = (state) -> binapi F6,get,state

F6 = ([key,x],args) ->

  [y] = args

  switch key
  | null       => lopo ["init",y]
  | "add"      => lopo ["chain",x + y]
  | "multiply" => lopo ["chain",x*y]
  | "ret"      => x
  | otherwise  =>
      fail 6


try

  compute = lopo [null]

  out = compute 5
  .add 5
  .multiply 10
  .ret!

  if not (out is 100)

    fail 6

catch E
  l E
  fail 6


