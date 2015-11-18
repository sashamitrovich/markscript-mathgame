# A simple mathgame
Example application using MarkLogic DB, markscript and polymer

# Configuration and bootstrapping MarkLogic
`cd server`

Check the server name and ports in the markscript.ts file, change to you hostname.
After that, run following commands:

```
markscript create
markscript deploy
```

You will not see any error messages if everything worked correctly.

# Run a simple test to check that the DB has been correctly bootstrapped

`markscript test`

# Running the KOA server

The KOA server runs the invisible proxy to the MarkLogic API extension functions:

`markscript run`

...and go to (or whatever server name/port combination you've configured in markscript.ts):
[http://localhost:8080](http://localhost:8080)

Finally, enjoy the game and
> May the Force be with you!
