com = require "../dist/main"

{l,z,binapi} = com

fail = com.print_fail "test/test2.js"

# ------------------------------------------------------------------------------------------

main = ->

getter = (state,key) ->
	state.concat key

log = (state) ->

	chain = state.join(' | ')

	"( " + chain + " )"

test = binapi(main,getter,[],log)

tsf = test.sync.flip




