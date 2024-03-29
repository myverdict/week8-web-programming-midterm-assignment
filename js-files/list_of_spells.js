// JavaScript used in secret_key_process.js which is used in secret_key.html
// https://harrypotter.fandom.com/wiki/List_of_spells

let listOfSpells = [
  {
    name: "Aberto",
    effect: "Opens doors",
  },
  { name: "Accio", effect: "Summons an object" },
  {
    name: "Age Line",
    effect:
      "Prevents people above or below a certain age from accessing a specific object or place",
  },
  {
    name: "Aguamenti",
    effect: "Produces a clean, drinkable water from a wand",
  },
  { name: "Alarte Ascendare", effect: "Shoots things high in the air" },
  { name: "Alohomora", effect: "Opens locked doors and objects" },
  {
    name: "Amato Animo Animato Animagus",
    effect: "Used as part of the ritual to become an Animagus",
  },
  {
    name: "Anapneo",
    effect: "Clears the target's airway if they are choking on something",
  },
  { name: "Anteoculatia", effect: "Turns head hair into antlers" },
  {
    name: "Anti Apparition",
    effect:
      "Prevents someone from apparating, or magically traveling to a location",
  },
  { name: "Anti Cheating", effect: "Prevents cheating on exams" },
  {
    name: "Anti Disapparition Jinx",
    effect: "Prevents disapparition in an area for a time",
  },
  {
    name: "Anti Intruder Jinx",
    effect: "Prevents intruders from entering an area",
  },
  {
    name: "Antonin Dolohov's Curse",
    effect: "Causes injuries capable of killing",
  },
  { name: "Aparecium", effect: "Reveals invisible ink" },
  {
    name: "Appare Vestigium",
    effect: "Reveals traces of magic, including footprints and track marks",
  },
  { name: "Apparate", effect: "Teleportation spell" },
  { name: "Aqua Eructo", effect: "Shoots water from wand" },
  { name: "Arania Exumai", effect: "Drives away spiders" },
  { name: "Arresto Momentum", effect: "Slows down objects" },
  {
    name: "Arrow Shooting Spell",
    effect: "Fires arrows from the caster's wand",
  },
  { name: "Ascendio", effect: "Lifts the caster high into the air" },
  { name: "Avada Kedavra", effect: "Murders opponent" },
  { name: "Avifors", effect: "Turns small objects into birds" },
  { name: "Avensenguim", effect: "Turns an object into a tracking device" },
  { name: "Avis", effect: "Launches birds from your wand" },

  { name: "Babbling curse", effect: "Causes uncontrollable babbling" },
  { name: "Badgering", effect: "Turns objects into badgers" },
  {
    name: "Bat Bogey Hex",
    effect:
      "Transforms the target's bogeys into large bats that fly out of the victim's nose",
  },
  {
    name: "Baubillious",
    effect: "Shoots a jet of white sparks from the tip of the wand",
  },
  { name: "Bedazzling Hex", effect: "Allows the caster to disguise things" },
  {
    name: "Bewitched Snowballs",
    effect: "Causes snowballs to pelt themselves at the target",
  },
  {
    name: "Bluebell Flames",
    effect: "Produces magical blue flames that can be held in a jar",
  },
  { name: "Blue sparks", effect: "Jets off blue sparks." },
  { name: "Bombarda", effect: "Causes small explosions" },
  { name: "Bombarda Maxima", effect: "Causes large explosions" },
  { name: "Brackium Emendo", effect: "Heals broken bones" },
  {
    name: "Bravery Charm",
    effect:
      "Increases the bravery of a teammate thereby increasing their performance against certain foes",
  },
  { name: "Bridge Conjuring Spell", effect: "Conjures a bridge from thin air" },
  { name: "Broom Jinx", effect: "Makes broomsticks throw their riders off" },
  {
    name: "Bubble Head Charm",
    effect: "Puts a person's head in a protective air bubble",
  },
  {
    name: "Bubble Spell",
    effect: "Produces a stream of non-bursting bubbles from the wand tip",
  },

  { name: "Calvorio", effect: "Removes the victim's hair" },
  {
    name: "Cantis",
    effect: "Causes the victim to burst uncontrollably into song",
  },
  {
    name: "Capacious Extremis",
    effect:
      "Expands the internal dimensions of an object without affecting the external dimensions, enhancing its capacity, and rendering its contents lighter",
  },
  {
    name: "Carpe Retractum",
    effect: "Shoots a rope from a wand to snag things",
  },
  {
    name: "Cascading Jinx",
    effect: "Attacks multiple opponents in close proximity to each other",
  },
  { name: "Caterwauling Charm", effect: "Detects enemies and emits a scream" },
  { name: "Cauldron to Sieve", effect: "Transforms cauldrons into sieves" },
  { name: "Cauldron to Badger", effect: "Transforms cauldrons into badgers" },
  {
    name: "Cave Inimicum",
    effect: "Produces a boundary that keeps the caster hidden from others",
  },
  { name: "Cheering Charm", effect: "Makes a person happy and giddy" },
  { name: "Circumrota", effect: "Rotates objects" },
  { name: "Cistem Aperio", effect: "Opens chests and boxes" },
  {
    name: "Colloportus",
    effect: "Locks doors and all things that can be locked",
  },
  { name: "Colloshoo", effect: "Makes a person's shoes stick to the ground" },
  { name: "Colovaria", effect: "Makes an object change color" },
  { name: "Confringo", effect: "Produces a fiery explosion" },
  { name: "Confundus", effect: "Used to confuse opponents" },
  {
    name: "Conjunctivitis",
    effect: "Irritates eyes, forcing them to swell shut",
  },
  { name: "Cornflake Skin Spell", effect: "Gives a person cereal skin" },
  { name: "Cracker Jinx", effect: "Conjures exploding wizard crackers" },
  {
    name: "Cribbing Spell",
    effect:
      "Assists the caster in cheating on written papers, tests, and exams",
  },
  {
    name: "Crinus Muto",
    effect: "Transfigures the colour and style of one's hair",
  },
  { name: "Crucio", effect: "Tortures a person" },

  {
    name: "Daydream Charm",
    effect: "Gives the caster a highly-realistic 30-minute daydream",
  },
  {
    name: "Defodio",
    effect: "Allows the caster to dig and carve through the target.",
  },
  { name: "Deletrius", effect: "Counters `Prior Incatato`" },
  { name: "Densaugeo", effect: "Enlarges teeth rapidly" },
  { name: "Deprimo", effect: "Blasts holes through walls and floors" },
  { name: "Depulso", effect: "Drives a target away from the caster" },
  { name: "Descendo", effect: "Causes object to fall or move downwards" },
  { name: "Desk Into Pig", effect: "Turns desks into pigs" },
  {
    name: "Detrioration Hex",
    effect: "Impairs foes and reduces their stamina",
  },
  { name: "Diffindo", effect: "Used to precisely cut or tear objects" },
  { name: "Diminuendo", effect: "Shrinks the target" },
  {
    name: "Disillusionment Charm",
    effect:
      "Causes the target to blend seamlessly in with its surroundings, like a chameleon.",
  },
  { name: "Disintegration Spell", effect: "Kills (or freezes) the victim" },
  { name: "Dissendium", effect: "Opens passages" },
  { name: "Draconifors", effect: "Transforms the target into a dragon" },
  { name: "Drought charm", effect: "Causes puddles and ponds to dry up" },
  { name: "Ducklifors", effect: "Transforms the target into a duck" },
  { name: "Duro", effect: "Turns an object to stone" },

  {
    name: "Ears to Kumquats Spell",
    effect: "Transforms the victim's ears into kumquats",
  },
  { name: "Ear Shrivelling Curse", effect: "Shrivels the target's ears" },
  {
    name: "Ebublio",
    effect: "Causes the victim to be trapped in a large bubble",
  },
  {
    name: "Engorgio",
    effect: "Causes the victim to be trapped in a large bubble",
  },
  { name: "Engorgio Skullus", effect: "Causes the victim's skull to swell" },
  {
    name: "Entomorphis",
    effect: "Transforms the target into an insectoid for a short time",
  },
  { name: "Ennervate", effect: "Counters stupefy" },
  { name: "Episkey", effect: "Heals minor injuries" },
  { name: "Epoximise", effect: "Glues two objects together" },
  { name: "Erecto", effect: "Erects things" },
  { name: "Evanesco", effect: "Makes objects vanish" },
  {
    name: "Everte Statum",
    effect: "Throws the victim backward, similarly to being thrown",
  },
  { name: "Expecto Patronum", effect: "Creates a Patronus" },
  { name: "Expelliarmus", effect: "Disarms your opponent" },
  { name: "Expulso", effect: "Makes objects explode" },
  { name: "Extinguishing Spell", effect: "Puts out fires" },

  {
    name: "False Memory Spell",
    effect:
      "Implants a false memory in the victim without them realising it was not originally theirs",
  },
  { name: "Feather-light Charm", effect: "Makes an object light as a feather" },
  { name: "Ferret to Human", effect: "Transforms a ferret into a human" },
  {
    name: "Ferula",
    effect:
      "Creates bandages and wraps them around a wound, splinting any broken bones",
  },
  {
    name: "Fianto Duri",
    effect: "Strengthens shield spells, and perhaps objects in general",
  },
  { name: "Fidelius Charm", effect: "Hides a secret within someone" },
  {
    name: "Fiendfyre",
    effect:
      "Fire that takes the shape of animals that actively seek out living targets and burn anything in its path",
  },
  { name: "Finestra", effect: "Shatters glass" },
  {
    name: "Finite Incantatum",
    effect: "Terminates all spell effects in the vicinity of the caster",
  },
  { name: "Finger Removing Jinx", effect: "Removes a person's fingers" },
  { name: "Firestorm", effect: "Produces a ring of fire from the wand" },
  { name: "Flagrante Curse", effect: "Causes objects to burn on contact" },
  { name: "Flagrate", effect: "Writes in midair with firey marks" },
  {
    name: "Flame Freezing Charm",
    effect: "Causes fire to tickle those caught in it instead of burning them",
  },
  { name: "Flask Conjuring Spell", effect: "Conjures a glass flask" },
  { name: "Flintifors", effect: "Transforms objects into matchboxes" },
  { name: "Flipendo", effect: "Knocks objects and creatures backwards" },
  {
    name: "Flipendo Duo",
    effect:
      "Knocks objects and creatures backwards; more powerful verion of Flipendo",
  },
  {
    name: "Flipendo Maxima",
    effect:
      "A more powerful version of the Knockback Jinx, which throws the target back at a much greater force",
  },
  {
    name: "Flipendo Tria",
    effect:
      "Knocks objects and creatures backwards; more powerful verion of Flipendo Duo",
  },
  {
    name: "Flying Charm",
    effect: "Allows broomsticks and flying carpets to fly",
  },
  { name: "Fumos", effect: "Defensive smokescreen that hinders visibility" },
  {
    name: "Fumos Duo",
    effect:
      "Defensive smokescreen that hinders visibility; more powerful version of Fumos",
  },
  { name: "Furnunculus", effect: "Produces boils (or pimples) on opponent" },
  { name: "Fur Spell", effect: "Grows fur on the target" },

  { name: "Geminio", effect: "Duplicates an object or person" },
  { name: "Glacius", effect: "Freezes the target with icy, cold air" },
  {
    name: "Glacius Duo",
    effect:
      "Freezes the target with icy, cold air; more powerful version of Glacius",
  },
  {
    name: "Glacius Trio",
    effect:
      "Freezes the target with icy, cold air; more powerful version of Glacius Duo",
  },
  { name: "Glisseo", effect: "Turns stairs into ramps" },
  {
    name: "Green Sparks",
    effect:
      "Shoots a jet of green sparks that can be used to signal an emergency",
  },
  {
    name: "Gripping Charm",
    effect: "Helps someone grip something more effectively",
  },
  {
    name: "Gytrash Conjuring Spell",
    effect:
      "Conjures luminous green Gytrashes from the wand, which can be commanded by the caster to attack an opponent",
  },

  { name: "Hair Thickening Charm", effect: "Thickens the target's hair." },
  { name: "Harmonia Nectere Passus", effect: "Repairs a Vanishing Cabinet" },
  { name: "Herbifors", effect: "Causes flowers to sprout from the target" },
  { name: "Herbivicus", effect: "Rapidly grows plants" },
  {
    name: "Hermione Granger's Jinx",
    effect:
      "Causes a traitor to break out in boils spelling 'SNEAK' on their forehead",
  },
  { name: "Homenum Revelio", effect: "Reveals humans nearby" },
  {
    name: "Homing Spell",
    effect:
      "Offensive spells that follow their target with a constant speed after being cast",
  },
  { name: "Homonculous Charm", effect: "Tracks movements of human beings" },
  {
    name: "Homorphus Charm",
    effect: "Causes a Werewolf to revert back to human shape",
  },
  {
    name: "Horn Tongue Hex",
    effect: "Transforms the target's tongue into a horn",
  },
  {
    name: "Horton-Keitch Braking Charm",
    effect: "Allows broom-riders to stop more precisely",
  },
  {
    name: "Horcrux Making Spell",
    effect: "Allows a part of a wizard's soul to pass into an object",
  },
  { name: "Hot Air Charm", effect: "Conjures a stream of hot air" },
  {
    name: "Hour-Reversal Charm",
    effect: "Reverses small amounts of time (up to five hours)",
  },
  { name: "Hover Charm", effect: "Makes a target hover" },
  {
    name: "Hurling Hex",
    effect:
      "Causes brooms to vibrate violently in the air and tries to buck their rider off",
  },

  { name: "Illegibilus", effect: "Makes writing impossible to read" },
  { name: "Immobulus", effect: "Renders a target immobile" },
  { name: "Impedimenta", effect: "Slows an advancing object" },
  { name: "Imperio", effect: "Controls a person" },
  {
    name: "Imperturbable Charm",
    effect:
      "Creates an invisible magical barrier on an object, such as a door, which bounces objects off of it, and muffles sounds",
  },
  { name: "Impervius", effect: "Makes an object repel water and mist" },
  {
    name: "Inanimatus Conjurus",
    effect: "Used to conjure an inanimate object",
  },
  {
    name: "Incarcerous",
    effect: "Ties someone up with ropes conjured from thin air",
  },
  { name: "Incendio", effect: "Starts a fire" },
  {
    name: "Incendio Duo",
    effect: "Starts a fire; stronger version of Incendio",
  },
  {
    name: "Incendio Tria",
    effect: "Starts a fire; stronger version of Incendio Duo",
  },
  { name: "Inflatus", effect: "Inflates a target with air" },
  { name: "Informous", effect: "Used to complete one's Folio Bruti" },
  {
    name: "Instant Scalping Hex",
    effect: "Makes a target bald removing all hair",
  },
  { name: "Intruder Charm", effect: "Detects intruders and sounds an alarm" },

  { name: "Jelly Brain Jinx", effect: "Reduces the target's mental processes" },
  {
    name: "Jelly Fingers Curse",
    effect:
      "Makes a target's fingers wobbly, making it uneasy for the victim to grasp objects",
  },

  { name: "Knee Reversal Hex", effect: "Puts knees on backward" },

  { name: "Lacarnum Inflamari", effect: "Ignites cloaks" },
  { name: "Langlock", effect: "Glues opponent's tongue to roof of mouth" },
  { name: "Lapifors", effect: "Transforms a target into a rabbit" },
  { name: "Leek Jinx", effect: "Makes leeks sprout out of the target's ears" },
  {
    name: "Legilimens",
    effect: "Allows the caster to delve into the mind of the victim",
  },
  {
    name: "Levicorpus",
    effect: "Hangs a target upside down into the air by their feet",
  },
  { name: "Liberacorpus", effect: "Counters Levicorpus" },
  {
    name: "Locomotor",
    effect:
      "Levitates a target a few inches off of the ground and then move the said object in any given direction",
  },
  { name: "Locomotor Mortis", effect: "Sticks legs together" },
  { name: "Locomotor Wibbly", effect: "Makes a target's legs jelly like" },
  { name: "Lumos", effect: "Creates a light at the wand tip" },
  {
    name: "Lumos Duo",
    effect: "Creates a focused beam of light from the end of the wand",
  },
  {
    name: "Lumos Maxima",
    effect:
      "Produces a blinding flash of bright white light from the tip of the wand",
  },
  { name: "Lumos Solem", effect: "Produce a blinding flash of sunlight" },

  { name: "Magic Fog", effect: "Conceals certain areas from Muggle view" },
  {
    name: "Magicus Extremos",
    effect:
      "Partnership-based charm that temporarily increases the caster's spell power",
  },
  { name: "Melofors", effect: "Encases the target's head in a pumpkin" },
  {
    name: "Meteolojinx Recanto",
    effect: "Causes weather effect spells to stop",
  },
  {
    name: "Mimblewimble",
    effect:
      "Ties the target's tongue in a knot, preventing them from making coherent speech, or saying incantations correctly",
  },
  {
    name: "Mobiliarbus",
    effect: "Levitates and moves objects in any given direction",
  },
  { name: "Mobilicorpus", effect: "Levitates and moves bodies" },
  { name: "Molliare", effect: "Produces an invisible cushion over a target" },
  { name: "Morsmordre", effect: "Conjures the Dark Mark" },
  {
    name: "Mucus Ad Nauseam",
    effect:
      "Gives the victim a nasty cold and an extremely runny nose that can cause the victim to collapse if not treated",
  },
  {
    name: "Muffliato",
    effect:
      "Prevents others from hearing nearby conversations by filling peoples' ears with an unidentifiable buzzing",
  },
  {
    name: "Multicorfors",
    effect: "Changes the colour and style of one's clothing",
  },
  {
    name: "Mutatio Skullus",
    effect: "Mutates the victim's head, causing them to grows extra heads",
  },

  { name: "Nebulus", effect: "Creates fog from the tip of a wand" },
  { name: "Nox", effect: "Extinguishes wandlight; counters Lumos" },

  { name: "Obliteration Charm", effect: "Removes footprints" },
  { name: "Obliviate", effect: "Erases specific memories" },
  { name: "Obscuro", effect: "Blindfolds the target" },
  { name: "Oculus Reparo", effect: "Mends eye glasses" },
  { name: "Oppugno", effect: "Causes objects to attack a target" },
  { name: "Orbis", effect: "Sucks the target into the ground" },
  { name: "Orchideous", effect: "Conjures a bouquet of flowers" },
  {
    name: "Oscausi",
    effect:
      "Seal someone's mouth shut, making it appear as though it was never there",
  },

  { name: "Pack", effect: "Packs luggage" },
  { name: "Papyrus Reparo", effect: "Mends torn pieces of paper" },
  { name: "Partis Temporus", effect: "Creates a temporary gap in the target" },
  { name: "Pepper Breath", effect: "Gives the victim fiery hot breath" },
  { name: "Periculum", effect: "Produces a burst of red sparks" },
  {
    name: "Permanent Sticking Charm",
    effect: "Sticks objects permanently in place",
  },
  {
    name: "Peskipiksi Pesternomi",
    effect:
      "Removes Pixies, however, the one time it was used, it had absolutely no effect",
  },
  {
    name: "Petrificus Totalus",
    effect:
      "Temporarily binds the victim's body in a soldier at attention like position",
  },
  {
    name: "Piertotum Locomotor",
    effect: "Animates statues and other inanimate objects",
  },
  { name: "Piscifors", effect: "Transforms things into fish" },
  {
    name: "Placement Charm",
    effect: "Places an object in or on a specific location",
  },
  {
    name: "Point Me",
    effect: "Makes a wand act like a compass, pointing North",
  },
  { name: "Portus", effect: "Turns an object into a portkey" },
  { name: "Prior Incantato", effect: "Reveals a wands last casted spell" },
  {
    name: "Protean Charm",
    effect:
      "Causes copies of an object to be remotely affected by changes made to the original",
  },
  {
    name: "Protego",
    effect:
      "Creates an invisible shield that reflects spells and blocks physical entities",
  },
  {
    name: "Protego Diabolica",
    effect:
      "Conjures a protective ring of black fire around the caster that only affects their enemies",
  },
  {
    name: "Protego Horribilis",
    effect:
      "Creates a powerful shield charm protecting the caster against Dark Magic",
  },
  {
    name: "Protego Maxima",
    effect:
      "Creates a powerful shield charm against dark magic; stronger than Protego",
  },
  {
    name: "Protego Totalum",
    effect: "Protects an area for an extended period of time",
  },
  { name: "Pullus", effect: "Transforms things into chickens" },
  {
    name: "Purple Firecrackers",
    effect:
      "Causes purple firecrackers to shoot out from the tip of one's wand.",
  },
  {
    name: "Pus-Squirting Spell",
    effect: "Causes yellowish goo to squirt from one's nose",
  },

  { name: "Quietus", effect: "Makes a target sound quieter; counters Sonorus" },

  {
    name: "Redactum Skullus",
    effect: "Shrinks the head of the target; counters Engorgio Skullus",
  },
  { name: "Reducio", effect: "Shrinks an object in size; counters Engorgio" },
  { name: "Reducto", effect: "Breaks objects and disintegrates them" },
  {
    name: "Refilling Charm",
    effect:
      "Refills whatever the caster points at with the drink originally in the container",
  },
  {
    name: "Relashio",
    effect: "Release the target's grip on whatever it was holding",
  },
  { name: "Rennervate", effect: "Cures unconsciousness" },
  { name: "Reparifarge", effect: "Reverses incomplete transformations" },
  {
    name: "Reparifors",
    effect:
      "Reverts minor magically-induced ailments, such as paralysis and poisoning",
  },
  { name: "Reparo", effect: "Repairs broken objects" },
  { name: "Repello Muggletum", effect: "Keeps Muggles away" },
  {
    name: "Repello Inimicum",
    effect: "Disintegrates a person entering this charm",
  },
  { name: "Revelio", effect: "Reveals secrets about a person or object" },
  {
    name: "Reverte",
    effect: "Returns objects to their original positions or states",
  },
  {
    name: "Rictusempra",
    effect: "Tickles the target until they become weak with laughter",
  },
  {
    name: "Riddikulus",
    effect: "Turns a boggart into a ridiculous form so you can laugh it away",
  },
  {
    name: "Rose Growth",
    effect: "Causes rose bushes to grow at an unusually fast pace",
  },
  { name: "Rowboat Spell", effect: "Makes boats row themselves" },

  { name: "Salvio Hexia", effect: "Protects against hexes" },
  { name: "Sardine Spell", effect: "Makes the victim sneeze out sardines" },
  {
    name: "Sauce Making Spell",
    effect: "Conjures a creamy sauce from the tip of the wand",
  },
  {
    name: "Scorching Spell",
    effect: "Produces dancing flames which presumably scorch the opponent",
  },
  { name: "Scourgify", effect: "Cleans objects" },
  { name: "Sealant Charm", effect: "Seals envelopes" },
  {
    name: "Sea Urchin Jinx",
    effect: "Transforms the victim into a sea urchin",
  },
  { name: "Sectumsempra", effect: "Causes wounds as if slashed by a sword" },
  { name: "Serpensortia", effect: "Conjures a serpent from the caster's wand" },
  {
    name: "Shield Penetration Spell",
    effect: "Annihilates magical enchantments and shields",
  },
  { name: "Shooting Spell", effect: "Used to shoot objects" },
  { name: "Silencio", effect: "Silences the target" },
  {
    name: "Skurge",
    effect:
      "Cleans up ectoplasm (remains of ghosts) and frightens ghosts/spirits",
  },
  {
    name: "Slippery Jinx",
    effect: "Makes an object slippery and difficult to hold",
  },
  {
    name: "Slugulus Eructo",
    effect: "Forces the victim to burp up slimy slugs",
  },
  { name: "Smashing Spell", effect: "Produces explosions" },
  {
    name: "Sonorous Charm",
    effect: "Emits a magnified roar from the tip of the wand",
  },
  { name: "Sonorus", effect: "Amplifies voice" },
  {
    name: "Specialis Revelio",
    effect: "Reveals spells casted on objects or potions",
  },
  {
    name: "Sponge Knees Curse",
    effect:
      "Makes the target's legs spongy, making it difficult for them to walk",
  },
  {
    name: "Spongify",
    effect: "Softens objects, making them rubbery and bouncy",
  },
  { name: "Squiggle Quill", effect: "Transforms writing quills into worms" },
  {
    name: "Stealth Sensoring Spell",
    effect: "Detects those under magical disguise",
  },
  {
    name: "Sternius",
    effect: "Causes the victim to sneeze for a short period of time",
  },
  { name: "Stinging Jinx", effect: "Stings the flesh of a target" },
  { name: "Stretching Jinx", effect: "Stretches the target" },
  { name: "Stupefy", effect: "Stuns the target, rendering them unconscious" },
  {
    name: "Supersensory Charm",
    effect:
      "Grants the caster to have enhanced senses, or to be able to sense things they would not normally sense",
  },
  { name: "Surgito", effect: "Removes enchantments" },
  { name: "Switching Spell", effect: "Switches two targets simultaneously" },

  {
    name: "Taboo",
    effect:
      "A jinx placed upon a word or a name, so that whenever that word is spoken, a magical disturbance is created which alerts the caster of the Taboo to the location of the speaker",
  },
  { name: "Tail Growing Spell", effect: "Causes the victim to grow a tail" },
  {
    name: "Tarantallegra",
    effect:
      "Makes a target's legs spasm wildly out of control, making it appear as though they are dancing",
  },
  { name: "Teacup to Tortoise", effect: "Transforms a teacup into a tortoise" },
  { name: "Teapot to Tortoise", effect: "Transforms a teapot into a tortoise" },
  { name: "Teeth Straightening Spell", effect: "Straightens crooked teeth" },
  {
    name: "Teleportation Spell",
    effect: "Vanishes objects which then appear elsewhere",
  },
  {
    name: "Tentaclifors",
    effect: "Transfigures the target's head into a tentacle",
  },
  { name: "Tergeo", effect: "Siphons liquid and cleans objects" },
  { name: "Titillando", effect: "Tickles and weakens the victim" },
  {
    name: "Toenail-growing hex",
    effect: "Grows the toenails at an extreme and uncontrollable rate",
  },
  {
    name: "Transmogrifian Torture",
    effect: "Possibly tortures the victim to death",
  },
  { name: "Trip Jinx", effect: "Forces the target to trip and fall over" },
  { name: "Twitchy-Ears Hex", effect: "Causes the victim's ears to twitch" },

  { name: "Unbreakable Charm", effect: "Makes objects unbreakable" },
  {
    name: "Unbreakable Vow",
    effect:
      "Causes a vow taken by a witch or wizard to be inviolable; if they should break it, the consequence is death",
  },
  {
    name: "Unsupported Flight",
    effect: "Allows a witch or wizard to fly through the air unaided",
  },

  {
    name: "Vaccum Cleaner Spell",
    effect:
      "Cleans objects by using the wand to suck up dust like a vacuum cleaner",
  },
  {
    name: "Ventus",
    effect: "Shoots a jet of strong spiralling wind from the tip of the wand",
  },
  {
    name: "Ventus Duo",
    effect:
      "Shoots a jet of strong spiralling wind from the tip of the wand; stronger than Ventus",
  },
  { name: "Vera Verto", effect: "Turns animals to water goblets" },
  {
    name: "Verdillious",
    effect: "Shoots green sparks from the end of the wand",
  },
  {
    name: "Verdimillious",
    effect:
      "Produces a jet of green sparks that can be used in duelling, or to reveal things hidden by dark magic",
  },
  {
    name: "Verdimillious Duo",
    effect:
      "Produces a jet of green sparks that can be used in duelling, or to reveal things hidden by dark magic; more powerful than Verdimillious",
  },
  { name: "Vermiculus", effect: "Transforms things into worms" },
  {
    name: "Vermillious",
    effect:
      "Shoots jet of red sparks that can be used to signal an emergency or as a minor duelling spell",
  },
  { name: "Vipera Evanesca", effect: "Vanishes snakes" },
  {
    name: "Vulnera Sanentur",
    effect:
      "Healing spell that slows blood flow, clears residue, and knits wounds",
  },

  {
    name: "Waddiwasi",
    effect:
      "Shoots small, soft masses of whatever the caster so desires at the target",
  },
  {
    name: "Washing up spell",
    effect: "Enchants dirty dishes to wash themselves",
  },
  { name: "Wingardium Leviosa", effect: "Makes on object fly or levitate" },
  {
    name: "White Sparks",
    effect:
      "Shoots a jet of white sparks; it can be used offensively as a minor duelling spell",
  },
];
