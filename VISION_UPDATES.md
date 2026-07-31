# What the vision should now say

## Why this exists

The vision was written before the game existed. The game now exists. Building it changed some
decisions, contradicted a few others, and turned up rules the vision never stated — one of which, left
unstated, quietly hollowed out the contrast the whole ending rests on.

The vision is otherwise unedited. It remains the argument: who this is for, what it must never do, and
why it is worth building at all. That argument survived construction almost entirely intact. What
follows is everything the construction taught, kept separate so the argument stays as written and so
the changes stay legible as changes.

---

## Decisions that changed

**Time pressure is gone as a mechanic.** The vision opens by describing the core loop as
trust-versus-verify *under time pressure*, and later lists feeling time pressure among the few skills
the player brings. Neither is true any more. The clock advances and is displayed, but it gates
nothing — every player reaches every situation, and even a run where the player checks everything ends
the final day in the early afternoon. The cost of checking is the real minutes a person spends
reading, which is the cost the job actually has and needs no mechanism behind it.

The clock kept one job, and it is a good one: it shows what the assistant is worth. A day taken on her
word ends hours before a day spent checking her, and the player is never told which of those hours
were the expensive ones.

**Manual review opens her draft, not an empty form.** *Half applied.* The verb table now describes her
prefilled output, which resolves the flat contradiction with the paragraph below it. What remains is
the other half of the same change: review opens **one** window, the form. The documents are not opened
alongside it. They are listed on the work item, and the player opens them deliberately — which is the
decision the game is actually measuring, so it should not happen automatically.

This is a real loss and worth naming as one. The original reasoning was exactly right: *a pre-filled
form is a form you skim, and skimming a draft is not verification.* That remains true. It is now the
player's problem rather than the design's. They pay the same time either way and what they buy is the
opportunity to check, not the obligation. A player who pays it and skims anyway has done precisely the
thing this game is about, and the ending tells them so.

**The day ends when the queue empties.** The screen order still lists a four o'clock stop. There is
none. The day ends when there is nothing left to work, at whatever hour that happens — which the vision
itself says correctly two sections later.

**A sixth window exists.** The interface section names five. There is also a documents window holding
the entire trial corpus, openable at any time at no cost, because looking in the wrong place is most of
what drowning in paperwork actually means.

**Consequences land on the day that caused them.** The day-end summary is described as showing
yesterday's consequences. It shows the closing day's own. The deferred version had a defect that took a
while to surface: consequences were committed when the *next* day began, so the final day of every run
produced none at all. Committing them when a day closes covers every path by construction, including
the one where the player skips ahead.

**One deliberate break in the diegetic rule.** The vision says no HUD and no menus, and means it. There
is one exception — a control to skip a day — and it lives on the day-end screen rather than on the desk,
so the desk itself stays clean. Worth naming, because an unacknowledged exception invites a second one.

**Smaller drift.** The taxonomy is six error types, plus *none*, plus the uncatchable failure, which
sits deliberately outside the taxonomy rather than in it. The uncatchable is exactly one, not at least
one. The assistant is right in a little over a third of the items she touches, rather than one in three
of all situations — a distinction that matters, because three of the nineteen are worked before she is
installed. And the run carries one omission rather than two, for the reason below.

---

## Contradictions to settle

Places where the vision disagrees with itself. A reader who follows the earlier statement builds the
wrong thing.

**On whether a four o'clock stop exists.** The screen order lists one; the timing section says the day
ends when the queue empties. The timing section is right.

**On how subjects are named.** The cast table says subjects are referred to by identifier; the roster
section shows an identifier and a surname. The roster is right — the identifier is what every document
and every email uses, and the name is what makes a changed line land.

*Settled:* whether the form arrives empty. The verb table and the paragraph below it now agree.

---

## Illustrations to refresh

The vision's worked examples — a query arriving in the day-end mail, a roster line changing from
enrolled to withdrawn — name subjects and values that no longer match the script. One of them shows a
subject who is seeded as having already screen-failed, which the vision's own roster says a few lines
earlier.

These are the most copyable thing in the document, so they should either be refreshed against the real
script or marked plainly as illustrative. Leaving them as they are invites someone to treat them as
canon.

---

## What building it taught

### An error must land somewhere the player can see and change it

This failed three times, and the third time was expensive.

Once the form arrives pre-filled, an error that merely *omits* something leaves every field holding a
plausible value. Nothing is blank. Nothing looks wrong. There is nothing to compare against anything
else. The error stops being expensive to catch and becomes impossible to catch — which makes it a
second uncatchable failure wearing an omission's clothes.

The vision states this constraint for omissions. It holds for every catchable error, and it was missed
most damagingly on the one item that could least afford it: the catchable misattribution that exists
specifically to teach the player the shape of the uncatchable specimen swap. The safety form had no
fields at all, only a determination, and her determination was already the correct one. So a player
could open that item, submit without reading a word, and be scored as having caught it.

The two items were mechanically identical. The contrast the entire ending is built on — *this one you
could have caught, that one nobody could* — was hollow on the side that is supposed to be reachable.

The rule to state: **every catchable error must differ from what she drafted, on a field or a
determination the player can actually see.** If an error type has nowhere to land on a given form,
either give the form somewhere, or use a different error type.

### The document corpus can contradict the script, and a careful player will find it

A dozen contradictions turned up between the roster and the trial documents. A subject shown as having
screen-failed in one manual whose situation the game scores as eligible. Visits dated months from where
the script puts them. A subject randomized in one document and awaiting an eligibility decision in
another.

The roster was right every single time; the documents were the outliers. One of the contradictions was
even instructive — a document recorded an early termination the roster had simply forgotten, so fixing
it made the game more faithful to its own canon, not less.

This matters more here than it would in most games. The entire ask of this game is *read carefully*. A
player who does exactly that, and finds two documents disagreeing, has been punished for the behaviour
the game is trying to reward. The failure is worst when the contradiction sits in the very document an
item sends the player to consult — which happened, on the first decision of the run.

The vision has no concept of this failure mode. It should: **no subject the script uses may appear
anywhere in the corpus with a conflicting timeline.**

### A tell is any surface feature that correlates with correctness — not only tone

The vision warns about register, hedging, sentence length and citation density, and is right to. Two
leaks got past all of it.

Among the summaries recommending that a subject be enrolled, the correct ones stated how many days the
washout cleared by and the incorrect ones did not. Separately, the incorrect ones were also lowest on
every severity number. Both patterns separated perfectly. Both were invisible to reviewing a day at a
time, because within any single day there were too few items for the pattern to exist.

They were found only by reading every summary in the run, end to end, in one sitting. That reading is
not optional, and it cannot be delegated to whoever is authoring a given day.

The rule to state: **any surface feature that correlates with correctness across the run is a tell**,
including features nobody thought of as register.

### The set pieces are identities, not descriptions

For the uncatchable item, the values the player would enter and the values she entered must be *the
same values*, and the outcome of accepting must be *the same outcome* as the outcome of checking. Not
similar — identical.

If they differ at all, the item costs less when verified. An item that costs less when verified is
catchable, which makes it a different item, which removes the only thing in the game that is genuinely
impossible.

The same holds for the harm nobody caused: accepting and checking must produce the same result, because
nothing the player does changes what happens to that subject.

### The impossible failure must not be counted among the player's misses

The closing audit counts data points not supported by source. The uncatchable specimen swap was being
counted among them — when every document on the player's desk supported it. That is what made it
uncatchable.

So a player who checked everything would be told, in the game's most formal register, that they had let
through an error no amount of checking could have found. That is the collapse of the two harm
categories the vision forbids in the strongest terms, arriving through arithmetic instead of through
prose. It is worth stating that the prohibition applies to the counting as much as to the wording.

### Floors the vision never set

She must be right at least twice within each kind of work, so that no kind of work reads as the one she
is bad at. No day may be entirely wrong. Every error type must appear at least once, or the taxonomy is
decoration. And the run must end on a decision where looking changes nothing — not on a harm, and not
on the impossible one.

### The sponsor cannot tell the difference between a value you never checked and one you checked wrongly

Both raise the same query, from the same address, in the same words. The vision gestures at this; it is
worth saying outright, because it is the honest shape of how these mistakes actually surface, and
because it denies the player the small comfort of being seen to have tried.

### The hand-worked morning is not scored against her

The first three items exist before she is installed. Working them is not a decision about whether to
trust her, so they must not count toward what the ending says about the player's calibration. Otherwise
the run's most careful hour makes the player look more diligent than they were.

---

## Loose ends

The vision cites a decision log, by identifier, in four places. No such log exists. Either write it, or
replace each citation with the decision itself.

The list of rules deciding whether a situation is good skips a number.

The vision still carries the working title, and is now the only prose document that does. That is a
defensible choice — renaming reaches into a great many generated files — but it should stay a choice
rather than an oversight.

There is a small typo in the newly rewritten verb table row: *"fills in corrections in themselves"*.

---

## What stands

Untouched, and still exactly right:

The audience, and the constraint that follows from it — that whatever the player must check is always a
comparison a layperson can make, however dense the document around it. The four entities and their
voices. Three kinds of work and no meters. The shape of the run, and the hand-worked morning that
teaches it. The assistant's voice, and that she never acts. The uncatchable failure, and its debrief
wording, which is now quoted identically everywhere it appears and guarded so it cannot drift. The
three kinds of harm, and the prohibition on letting any two of them blur. The three closing beats.

That is most of the document. The argument was sound; it was the mechanisms underneath it that moved.
