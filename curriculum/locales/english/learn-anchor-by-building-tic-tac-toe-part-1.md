# Solana - Learn Anchor by Building Tic-Tac-Toe: Part 1

## 1

### --description--

Previously, you built and deployed a program (smart contract) to the Solana blockchain using the native `solana_program` crate. In this project, you will use the Anchor framework to build and deploy a program to the Solana blockchain.

Anchor offers quick and convenient tools and modules for building and deploying programs.

Open a new terminal, and install the Anchor Version Manager (AVM) to get started.

```bash
cargo install --git https://github.com/coral-xyz/anchor avm --locked --force
```

### --tests--

You should have `avm` installed.

```js
assert.fail();
```

## 2

### --description--

Anchor Version Manager is a tool for using multiple versions of the Anchor CLI.

Use `avm` to install the latest version of the Anchor CLI.

```bash
avm install latest
```

**Note:** Technically, this step is not necessary as the latest version of the Anchor CLI is installed by default.

### --tests--

You should have the latest version of the Anchor CLI installed.

```js
assert.fail();
```

## 3

### --description--

Instruct `avm` to use the latest version of the Anchor CLI:

```bash
avm use latest
```

### --tests--

You should be using the latest version of the Anchor CLI.

```js
assert.fail();
```

## 4

### --description--

Verify you are using the latest version of the Anchor CLI:

```bash
anchor --version
```

### --tests--

You should see version `0.27` printed to the console.

```js
assert.fail();
```

## 5

### --description--

You will be building a Tic-Tac-Toe game on the Solana blockchain.

Within `learn-anchor-by-building-tic-tac-toe/`, create a new project named `tic-tac-toe`:

```bash
anchor init --no-git tic-tac-toe
```

**Note:** The `--no-git` flag is used to prevent the project from being initialized as a git repository.

### --tests--

You should be in the `learn-anchor-by-building-tic-tac-toe` directory.

```js
assert.fail();
```

You should run `anchor init --no-git tic-tac-toe` in the terminal.

```js
assert.fail();
```

You should have a `tic-tac-toe` directory.

```js
assert.fail();
```

## 6

### --description--

Anchor has created a `tic-tac-toe` directory with the following structure:

```bash
tic-tac-toe/
├── app/
├── migrations/
│   └── deploy.ts
├── programs/
│   └── tic-tac-toe/
│       ├── src/
│       │   └── lib.rs
│       ├── Cargo.toml
│       └── Xargo.toml
├── tests/
│   └── tic-tac-toe.ts
├── Anchor.toml
├── Cargo.toml
├── package.json
├── tsconfig.json
└── yarn.lock
```

In your terminal, change into the `tic-tac-toe` directory.

### --tests--

You should be in the `tic-tac-toe` directory.

```js
assert.fail();
```

## 7

### --description--

The `app` directory is a placeholder for a web app that would interact with the program. The `migrations/deploy.ts` script is run on `anchor migrate`. The `programs` directory contains all the programs (smart contracts) that will be deployed to the Solana blockchain. The `tests` directory contains the client-side tests for your programs.

You will be mostly working in `programs/tic_tac_toe/src/lib.rs`.

Get the program id (public key) of the `tic-tac-toe` program:

```bash
anchor keys list
```

### --tests--

The public key of your `tic-tac-toe` program should be printed to the console.

```js
assert.fail();
```

You should be in the `tic-tac-toe` directory.

```js
assert.fail();
```

## 8

### --description--

The Anchor CLI provides an `anchor test` command that:

1. Builds all programs
2. Starts a local Solana cluster
3. Deploys the programs to the cluster
4. Calls the `test` script in the `scripts` table in `Anchor.toml`
5. Cleans up the local Solana cluster

Run the `anchor test` command:

```bash
anchor test
```

### --tests--

The `anchor test` command should error ❌.

```js
assert.fail();
```

You should be in the `tic-tac-toe` directory.

```js
assert.fail();
```

## 9

### --description--

You should see the following error:

```bash
Error: failed to send transaction: Transaction simulation failed: This program may not be used for executing instructions
```

For your program, you will need to manually start a local Solana validator. Do so, in a new terminal.

### --tests--

The validator should be running at `http://localhost:8899`.

```js
const command = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '{"jsonrpc":"2.0","id":1, "method":"getHealth"}'`;
const { stdout, stderr } = await __helpers.getCommandOutput(command);
try {
  const jsonOut = JSON.parse(stdout);
  assert.deepInclude(jsonOut, { result: 'ok' });
} catch (e) {
  assert.fail(e, 'Try running `solana-test-validator` in a separate terminal');
}
```

## 10

### --description--

With the local validator running, use the `--skip-local-validator` flag to tell Anchor to not start its own local validator.

### --tests--

The `anchor test --skip-local-validator` command should error.

```js
assert.fail();
```

You should be in the `tic-tac-toe` directory.

```js
assert.fail();
```

The validator should be running at `http://localhost:8899`.

```js
const command = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '{"jsonrpc":"2.0","id":1, "method":"getHealth"}'`;
const { stdout, stderr } = await __helpers.getCommandOutput(command);
try {
  const jsonOut = JSON.parse(stdout);
  assert.deepInclude(jsonOut, { result: 'ok' });
} catch (e) {
  assert.fail(e, 'Try running `solana-test-validator` in a separate terminal');
}
```

## 11

### --description--

You should see the following error:

```bash
Error: AnchorError occurred. Error Code: DeclaredProgramIdMismatch. Error Number: 4100. Error Message: The declared program id does not match the actual program id.
```

Double-check the program id in the `Anchor.toml` file.

Run `anchor keys list` again to see if it matches the `programs.localnet.tic_tac_toe` value.

### --tests--

You should run `anchor keys list` and see the program id printed to the console.

```js
assert.fail();
```

You should be in the `tic-tac-toe` directory.

```js
assert.fail();
```

## 12

### --description--

Copy the program id, and replace the default values with it in two locations:

1. The string value within the `declare_id` macro in `programs/tic-tac-toe/src/lib.rs`
2. The `tic_tac_toe` key within `Anchor.toml`

### --tests--

The `lib.rs` file should contain the program id within the `declare_id!()` call.

```js
assert.fail();
```

The `Anchor.toml` file should contain the program id as the value for the `tic_tac_toe` key.

```js
assert.fail();
```

## 13

### --description--

Run the test command again:

```bash
anchor test --skip-local-validator
```

### --tests--

The `anchor test --skip-local-validator` command should succeed.

```js
assert.fail();
```

The validator should be running at `http://localhost:8899`.

```js
const command = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '{"jsonrpc":"2.0","id":1, "method":"getHealth"}'`;
const { stdout, stderr } = await __helpers.getCommandOutput(command);
try {
  const jsonOut = JSON.parse(stdout);
  assert.deepInclude(jsonOut, { result: 'ok' });
} catch (e) {
  assert.fail(e, 'Try running `solana-test-validator` in a separate terminal');
}
```

## 14

### --description--

Shifting focus to the `lib.rs` file, you will see a few similarities to the native Solana program development workflow.

Instead of an entrypoint function, the `program` attribute defines the module containing all instruction handlers defining all entries into a Solana program.

The `initialize` function is an instruction handler. It is a function that takes a `Context` as an argument. The context contains the program id, and the accounts passed into the function. Anchor expects all accounts to be fully declared as inputs to the handler.

Rename the `initialize` function to `setup_game`.

### --tests--

The `setup_game` function should exist in the `lib.rs` file.

```js
assert.fail();
```

## 15

### --description--

The `Initialize` struct is annotated to derive `Accounts`. This means that the `Initialize` struct will be used to deserialize the accounts passed into the `setup_game` function. If a client does not pass in the correct accounts, the deserialization will fail. This is one of the ways that Anchor ensures that the client is passing in the correct accounts.

Rename the `Initialize` struct to `SetupGame`.

### --tests--

The `SetupGame` struct should exist in the `lib.rs` file.

```js
assert.fail();
```

The `setup_game` function should take a `Context<SetupGame>` as an argument.

```js
assert.fail();
```

## 16

### --description--

Setting up the game will require creating an account to store the game state. This account will be owned by the system program, and will be created with a program derived address (PDA).

You could manually calculate the rent required, validate a passed in account can pay, create the account, and send the create transaction. However, Anchor provides a convenient attribute macro to automate this process:

```rust
#[derive(Accounts)]
pub struct AccountsInContext<'info> {
    #[account(init)]
    pub derived_account: Account<'info, AccountStruct>
}
```

The `#[account()]` attribute with an `init` parameter will create the account when required. The `AccountStruct` is a struct that will be used to deserialize the account data. The `AccountStruct` must implement the `AnchorSerialize` and `AnchorDeserialize` traits.

Within `SetupGame`, add a public field `game` with a type of `Account<'info, Game>`. Annotate the field such that it is initialized when required.

### --tests--

`SetupGame` should contain a field `game`.

```js
assert.fail();
```

`game` should be typed `Account<'info, Game>`.

```js
assert.fail();
```

`game` should be annotated with `#[account(init)]`.

```js
assert.fail();
```

`SetupGame` should be punctuated with a lifetime `'info`.

```js
assert.fail();
```

## 17

### --description--

When an account is initialized, another account must pay for the rent and transaction fees.

Declare another account in `SetupGame` called `player_one`. Give `player_one` a type of `Signer<'info>`.

**Note:** The `Signer` trait is a special trait that indicates the account is a signer. This is required for lamports to be transferred **from** the account.

### --tests--

`SetupGame` should contain a field `player_one`.

```js
assert.fail();
```

`player_one` should be typed `Signer<'info>`.

```js
assert.fail();
```

`player_one` should be annotated with `#[account()]`.

```js
assert.fail();
```

## 18

### --description--

Now, mark the `player_one` account as the payer for the `game` account:

```rust
#[derive(Accounts)]
pub struct AccountsInContext<'info> {
    #[account(
        init,
        payer = payer_account
    )]
    pub derived_account: Account<'info, AccountStruct>,
    #[account()]
    pub payer_account: Signer<'info>
}
```

### --tests--

`game` should be annotated with `payer = player_one`.

```js
assert.fail();
```

## 19

### --description--

In order for any data in an account to be changed, the account must be mutable:

```rust
#[account(mut)]
pub mutable_account: Signer<'info>
```

Mark the `player_one` account as mutable.

### --tests--

`player_one` should be annotated with `#[account(mut)]`.

```js
assert.fail();
```

## 20

### --description--

The `#[account(init)]` attribute will create the account when required. However, the account must be rent exempt, and have enough space to store any data expected:

```rust
#[account(init, space = <AMOUNT_IN_BYTES>)]
pub derived_account: Account<'info, AccountStruct>
```

Add a `space` parameter to the `game` account with a value of `10`. This means the account will be initialised with 10 bytes of space.

### --tests--

`game` should be annotated with `space = 10`.

```js
assert.fail();
```

## 21

### --description--

Creating an account with `10` bytes allocated is great and all, but you do not actually know how much space you need until you have defined the `Game` struct representing the account data.

Define a public struct `Game`, and annotate it with `#[account]` to indicate it is a Solana account.

### --tests--

`pub struct Game` should exist in the `lib.rs` file.

```js
assert.fail();
```

`Game` should be annotated with `#[account]`.

```js
assert.fail();
```

## 22

### --description--

A game of tic-tac-toe consists of two players.

Keep track of the players, by adding a `players` field in `Game` with a type of `[Pubkey; 2]`.

### --tests--

`Game` should contain a field `players`.

```js
assert.fail();
```

`players` should be typed `[Pubkey; 2]`.

```js
assert.fail();
```

## 23

### --description--

Keep track of the current turn number, by adding a `turn` field in `Game` with a type of `u8`.

### --tests--

`Game` should contain a field `turn`.

```js
assert.fail();
```

`turn` should be typed `u8`.

```js
assert.fail();
```

## 24

### --description--

Keep track of the board state (the value of each tile), by adding a `board` field in `Game` with a type of `[[Option<Sign>; 3]; 3]`.

### --tests--

`Game` should contain a field `board`.

```js
assert.fail();
```

`board` should be typed `[[Option<Sign>; 3]; 3]`.

```js
assert.fail();
```

## 25

### --description--

Keep track of the current game condition, by adding a `state` field in `Game` with a type of `GameState`.

### --tests--

`Game` should contain a field `state`.

```js
assert.fail();
```

`state` should be typed `GameState`.

```js
assert.fail();
```

## 26

### --description--

Define a public enum `Sign` with variants `X` and `O`.

### --tests--

`pub enum Sign` should exist in the `lib.rs` file.

```js
assert.fail();
```

`Sign` should have a variant `X`.

```js
assert.fail();
```

`Sign` should have a variant `O`.

```js
assert.fail();
```

## 27

### --description--

Define a public enum `GameState` with variants `Active`, `Tie`, and `Won`. The `Won` variant should contain a named field `winner` with a type of `Pubkey`.

### --tests--

`pub enum GameState` should exist in the `lib.rs` file.

```js
assert.fail();
```

`GameState` should have a variant `Active`.

```js
assert.fail();
```

`GameState` should have a variant `Tie`.

```js
assert.fail();
```

`GameState` should have a variant `Won { winner: Pubkey }`.

```js
assert.fail();
```

## 28

### --description--

In order for Anchor to serialize and deserialize the `Game` account data, `GameState` and `Sign` must implement the `AnchorSerialize` and `AnchorDeserialize` traits.

Derive the `AnchorSerialize` and `AnchorDeserialize` traits for `GameState` and `Sign`.

### --tests--

`GameState` should be annotated with `#[derive(AnchorSerialize, AnchorDeserialize)]`.

```js
assert.fail();
```

`Sign` should be annotated with `#[derive(AnchorSerialize, AnchorDeserialize)]`.

```js
assert.fail();
```

## 29

### --description--

On top of `AnchorSerialize` and `AnchorDeserialize`, both `GameState` and `Sign` must also implement the `Clone` trait.

Derive the `Clone` trait for `GameState` and `Sign`.

### --tests--

`GameState` should be annotated with `#[derive(Clone)]`.

```js
assert.fail();
```

`Sign` should be annotated with `#[derive(Clone)]`.

```js
assert.fail();
```

## 30

### --description--

Finally, because `Sign` is within a slice, it must also implement the `Copy` trait.

Derive the `Copy` trait for `Sign`.

### --tests--

`Sign` should be annotated with `#[derive(Copy)]`.

```js
assert.fail();
```

## 31

### --description--

In order for an account to be created, the `System` program must be used. The `System` program is a built-in program that is available to all Solana programs, but must be annotated as needed in the context.

Add a public `system_program` field to the `SetupGame` struct, and type it as `Program<'info, System>`.

### --tests--

`SetupGame` should contain a field `system_program`.

```js
assert.fail();
```

`system_program` should be typed `Program<'info, System>`.

```js
assert.fail();
```

## 32

### --description--

Now that `Game` is fully defined, its size can be determined. Doing so involves summing the size of each field, and adding 8 bytes for the account <dfn title="a uniquely identifiable octet to help Anchor find an account">discriminator</dfn>.

For `Game`:

| Field   | Unit Size | Quantity | Total Size |
| ------- | --------- | -------- | ---------- |
| players | 32        | 2        | 64         |
| turn    | 1         | 1        | 1          |
| board   | 1 + 1     | 3 \* 3   | 18         |
| state   | 1 + 32    | 1        | 33         |

Anchor provides a table of sizes for each Rust type: `https://www.anchor-lang.com/docs/space`

Replace the `10` bytes allocated for the `Game` account with the correct size.

### --tests--

`Game` should be annotated with `#[account(size = 8 + (32*2) + (1) + ((1+1)*(3*3)) + (1+32))]`.

```js
assert.fail();
```

## 33

### --description--

**ATTENTION**: Your `lib.rs` file should have been seeded with all the game code. The game code is not relevant to Anchor, but you are still encouraged to read through it to understand how the game works.

Just a few things to fix. First, derive `PartialEq` for `GameState` and `Sign`.

### --tests--

`GameState` should be annotated with `#[derive(PartialEq)]`.

```js
assert.fail();
```

`Sign` should be annotated with `#[derive(PartialEq)]`.

```js
assert.fail();
```

### --seed--

#### --force--

#### --"tic-tac-toe/programs/tic-tac-toe/src/lib.rs"--

```rust
use anchor_lang::prelude::*;

declare_id!("BUfb6FXLkiSpMnJnMR4Q5uGZYZkaNGytjhLwiiJQsE8F");

#[program]
pub mod tic_tac_toe {
    use super::*;

    pub fn setup_game(ctx: Context<SetupGame>) -> Result<()> {
      Ok(())
    }
}

#[derive(Accounts)]
pub struct SetupGame<'info> {
    #[account(init, payer = player_one, space = 8 + Game::MAXIMUM_SIZE)]
    pub game: Account<'info, Game>,
    #[account(mut)]
    pub player_one: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[account]
pub struct Game {
    players: [Pubkey; 2],          // (32 * 2)
    turn: u8,                      // 1
    board: [[Option<Sign>; 3]; 3], // 9 * (1 + 1) = 18
    state: GameState,              // 32 + 1
}

#[derive(AnchorSerialize, AnchorDeserialize, Clone)]
pub enum GameState {
    Active,
    Tie,
    Won { winner: Pubkey },
}

#[derive(
    AnchorSerialize,
    AnchorDeserialize,
    Copy,
    Clone,
)]
pub enum Sign {
    X,
    O,
}

/// A tile on the game board.
pub struct Tile {
    row: u8,
    column: u8,
}

impl Game {
    pub const MAXIMUM_SIZE: usize = (32 * 2) + 1 + ((1 + 1) * 9) + (1 + 32);

    pub fn start(&mut self, players: [Pubkey; 2]) -> Result<()> {
        // TODO: Ensure the game is not already started.

        self.players = players;
        self.turn = 1;
        Ok(())
    }

    pub fn is_active(&self) -> bool {
        self.state == GameState::Active
    }

    fn current_player_index(&self) -> usize {
        ((self.turn - 1) % 2) as usize
    }

    pub fn current_player(&self) -> Pubkey {
        self.players[self.current_player_index()]
    }

    pub fn play(&mut self, tile: &Tile) -> Result<()> {
        // TODO: Ensure the game is active.

        match tile {
            tile @ Tile {
                row: 0..=2,
                column: 0..=2,
            } => match self.board[tile.row as usize][tile.column as usize] {
                Some(_) => {
                  // TODO: Return an error that the tile is already set.
                  return Err();
                },
                None => {
                    self.board[tile.row as usize][tile.column as usize] =
                        Some(Sign::from_usize(self.current_player_index()).unwrap());
                }
            },
            _ => {
              // TODO: Return an error that the tile is out of bounds.
              return Err();
            },
        }

        self.update_state();

        if GameState::Active == self.state {
            self.turn += 1;
        }

        Ok(())
    }

    fn is_winning_trio(&self, trio: [(usize, usize); 3]) -> bool {
        let [first, second, third] = trio;
        self.board[first.0][first.1].is_some()
            && self.board[first.0][first.1] == self.board[second.0][second.1]
            && self.board[first.0][first.1] == self.board[third.0][third.1]
    }

    fn update_state(&mut self) {
        for i in 0..=2 {
            // three of the same in one row
            if self.is_winning_trio([(i, 0), (i, 1), (i, 2)]) {
                self.state = GameState::Won {
                    winner: self.current_player(),
                };
                return;
            }
            // three of the same in one column
            if self.is_winning_trio([(0, i), (1, i), (2, i)]) {
                self.state = GameState::Won {
                    winner: self.current_player(),
                };
                return;
            }
        }

        // three of the same in one diagonal
        if self.is_winning_trio([(0, 0), (1, 1), (2, 2)])
            || self.is_winning_trio([(0, 2), (1, 1), (2, 0)])
        {
            self.state = GameState::Won {
                winner: self.current_player(),
            };
            return;
        }

        // reaching this code means the game has not been won,
        // so if there are unfilled tiles left, it's still active
        for row in 0..=2 {
            for column in 0..=2 {
                if self.board[row][column].is_none() {
                    return;
                }
            }
        }

        // game has not been won
        // game has no more free tiles
        // -> game ends in a tie
        self.state = GameState::Tie;
    }
}

```

## 34

### --description--

Second, in order to be able to match the correct `Sign` variant with the current player, `num_traits::FromPrimitive` should be derived for `Sign`.

To derive `FromPrimitive`, you need to add `num-traits` and `num-derive` to the dependencies in `programs/tic-tac-toe/Cargo.toml`.

**Note:** `num-derive` enables the use of `#[derive(FromPrimitive)]` on a struct or enum.

### --tests--

You should add `num-traits` to the dependencies in `programs/tic-tac-toe/Cargo.toml`.

```js
assert.fail();
```

You should add `num-derive` to the dependencies in `programs/tic-tac-toe/Cargo.toml`.

```js
assert.fail();
```

## 35

### --description--

Now, derive `num_derive::FromPrimitive` for `Sign`.

### --tests--

`Sign` should derive `num_derive::FromPrimitive`.

```js
assert.fail();
```

`num_traits::FromPrimitive` should be brought into the module scope.

```js
assert.fail();
```

`num_derive` should be brought into the module scope.

```js
assert.fail();
```

## 36

### --description--

The third fix is to add errors to the `play` method.

Define a public enum `TicTacToeError` with the variants `TileAlreadySet` and `TileOutOfBounds`.

### --tests--

A `TicTacToeError` enum should be defined.

```js
assert.fail();
```

`TicTacToeError` should have the variant `TileAlreadySet`.

```js
assert.fail();
```

`TicTacToeError` should have the variant `TileOutOfBounds`.

```js
assert.fail();
```

## 37

### --description--

In the appropriate location, return the `TileAlreadySet` error.

### --tests--

The first `return Err()` should return the `TileAlreadySet` error.

```js
assert.fail();
```

## 38

### --description--

Anchor does not understand the type `TicTacToeError` yet. To convert it into an error Anchor understands, use the `error_code` attribute macro above the `TicTacToeError` enum.

```rust
#[error_code]
pub enum MyCustomError { ... }
```

### --tests--

Your `TicTacToeError` enum should have the `error_code` attribute macro.

```js
assert.fail();
```

## 39

### --description--

Convert the `TileAlreadySet` error into an `anchor_lang::error::Error` by calling the derived `into` method on it.

### --tests--

You should have `return Err(TicTacToeError::TileAlreadySet.into());`.

```js
assert.fail();
```

## 40

### --description--

In the appropriate location, return the `TileOutOfBounds` error.

### --tests--

The second `return Err()` should return the `TileOutOfBounds` error.

```js
assert.fail();
```

The `TileOutOfBounds` error should be converted into an `anchor_lang::error::Error`.

```js
assert.fail();
```

## 41

### --description--

Another way to return an error is to use the `require!` macro:

```rust
require!(condition, MyCustomError::MyCustomErrorVariant);
```

In the appropriate location, use the `require!` macro to return early if the game state is not `Active`. Add the following variant and return with `TicTacToeError::GameAlreadyOver`.

### --tests--

The `require!` macro should be used to return early if the game state is not `Active`.

```js
assert.fail();
```

The `require!` condition should use the provided `is_active` method.

```js
assert.fail();
```

The `require!` macro should return the `GameAlreadyOver` error.

```js
assert.fail();
```

The `TicTacToeError` enum should have the variant `GameAlreadyOver`.

```js
assert.fail();
```

## 42

### --description--

The final _TODO_ in the game logic is to return early if the `start` method is called when the `turn` is greater than `0`.

Within the `start` method, use the `require_eq!` macro to return early if the `turn` is not equal to `0`. Add the following variant and return with `TicTacToeError::GameAlreadyStarted`.

### --tests--

The `require_eq!` macro should be used to return early if the `turn` is not equal to `0`.

```js
assert.fail();
```

The `require_eq!` macro should return the `GameAlreadyStarted` error.

```js
assert.fail();
```

The `TicTacToeError` enum should have the variant `GameAlreadyStarted`.

```js
assert.fail();
```

## 43

### --description--

Focussing your attention back to the program, the Context provides all the accounts as defined in the generic passed to `Context`. These accounts can be accessed by name:

```rust
#[derive(Accounts)]
pub struct AccountsStruct<'info> {
    pub account_1: AccountInfo<'info>,
    pub account_2: AccountInfo<'info>,
    pub account_3: ProgramAccount<'info, TicTacToe>,
}
pub fn instruction_handler(ctx: Context<AccountsStruct>) -> Result<()> {
    let account_1 = &ctx.accounts.account_1;
    let account_2 = &ctx.accounts.account_2;
    let account_3 = &ctx.accounts.account_3;
}
```

Within the `setup_game` instruction handler, declare a variable `player_one` and assign the corresponding account reference to it.

### --tests--

The `player_one` variable should be declared.

```js
assert.fail();
```

The `player_one` variable should be assigned `&ctx.accounts.player_one`.

```js
assert.fail();
```

## 44

### --description--

Setting up the game requires three steps:

1. The public address of the first player
2. The public address of the second player
3. To call the `start` method on the `game` account

Withing `setup_game` declare a variable `player_one_pubkey` and assign the return of the `key` method provided by the `player_one` account to it.

### --tests--

The `player_one_pubkey` variable should be declared.

```js
assert.fail();
```

The `player_one_pubkey` variable should be assigned `player_one.key()`.

```js
assert.fail();
```

## 45

### --description--

Instruction handlers can be called with arguments, and the values accessed through parameters:

```rust
pub fn instruction_handler(ctx: Context<AccountsStruct>, arg1: u8, arg2: u8) -> Result<()> {}
```

In order to get the second player's public key, add a `player_two_pubkey` parameter to the `setup_game` instruction handler. Type it with `Pubkey`.

### --tests--

The `setup_game` instruction handler should have a `player_two_pubkey` parameter.

```js
assert.fail();
```

The `player_two_pubkey` parameter should be of type `Pubkey`.

```js
assert.fail();
```

## 46

### --description--

Within the `setup_game` instruction handler, declare a variable `game`, and assign a mutable reference to the `game` account to it.

### --tests--

The `game` variable should be declared.

```js
assert.fail();
```

The `game` variable should be assigned `&mut ctx.accounts.game`.

```js
assert.fail();
```

## 47

### --description--

Within the `setup_game` instruction handler, replace the `Ok(())` witha call to the `start` method on the `game` account, passing in the `player_one_pubkey` and `player_two_pubkey` variables in the expected format.

### --tests--

`setup_game` should have `game.start(player_one_pubkey, player_two_pubkey)`.

```js
assert.fail();
```

## 48

### --description--

Currently, the first player has to provide a separate keypair for the `game` account. Then, the first player would also need to share this with the second player in order for them to play.

Instead, you can make use of a PDA to generate a deterministic address for the `game` account:

```rust
#[derive(Accounts)]
pub struct InitialisePDAAccount<'info> {
    #[account(
      init,
      payer = payer,
      seeds = [b"<SEED>", payer.key().as_ref()],
      bump
      )
    ]
    pub pda_account: Account<'info, PDAAccount>,
}
```

Within `lib.rs`, initialize the `game` account using two seeds: the first the byte string `"game"`, and the second the payer's public key.

### --tests--

`SetupGame` should annotate the `game` field with `#[account(seeds = [b"game", player_one.key().as_ref()])]`.

```js
assert.fail();
```

## 49

### --description--

The seeds are used to hash the address of the `game` account. Being a PDA, the address is deterministic, meaning that the same seeds will always produce the same address. Also, the produced public key must **not** be on the <dfn title="an elliptic curve compatible with 32-byte slices to generate.">ed25519 curve</dfn>.

To ensure this, an extra seed is added. This is called the <dfn title="an extra seed used to push an address off of a curve.">bump seed</dfn>.

Explicitly tell Anchor to generate the bump seed, by annotating the `game` field with `#[account(bump)]`.

### --tests--

`SetupGame` should annotate the `game` field with `#[account(bump)]`.

```js
assert.fail();
```

## 50

### --description--

Run the tests to see if the `setup_game` instruction handler is working correctly.

### --tests--

The test for `setup_game` should pass when `anchor test --skip-local-validator`.

```js
assert.fail();
```

You should be in the `tic-tac-toe` directory.

```js
assert.fail();
```

The validator should be running at `http://localhost:8899`.

```js
const command = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '{"jsonrpc":"2.0","id":1, "method":"getHealth"}'`;
const { stdout, stderr } = await __helpers.getCommandOutput(command);
try {
  const jsonOut = JSON.parse(stdout);
  assert.deepInclude(jsonOut, { result: 'ok' });
} catch (e) {
  assert.fail(e, 'Try running `solana-test-validator` in a separate terminal');
}
```

## 51

### --description--

Using a constant string, and the first player's public key as seeds only allows one game to be played. Dynamic seeds can be added to the `game` account to allow for multiple games to be played with the same player accounts, using the `instruction` attribute:

```rust
pub fn initialize(ctx: Context<Init>, arg_1: String, arg_2: u8) -> Result<()> {}

#[derive(Accounts)]
#[instruction(arg_1: String, arg_2: u8)]
pub struct Init<'info> {
    #[account(
      init,
      payer = payer,
      seeds = [arg_1.as_bytes(), payer.key().as_ref(), arg_2],
      bump
    )]
    pub pda: Account<'info, Game>,
    pub payer: Signer<'info>,
    pub system_program: Program<'info, System>,
}
```

The `instruction` attribute provides access to the instruction's arugments. You have to list them in the same order as in the instruction but you can omit all arguments after the last one you need.

Within `lib.rs`, add a third parameter `game_id` of type `String` to the `setup_game` instruction handler.

### --tests--

The `setup_game` instruction handler should have a `game_id` parameter.

```js
assert.fail();
```

The `game_id` parameter should be of type `String`.

```js
assert.fail();
```

## 52

### --description--

Within `lib.rs`, annotate the `SetupGame` struct with the `instruction` attribute, passing in the required parameters to access the `game_id` parameter.

### --tests--

The `SetupGame` struct should be annotated with `#[instruction(player_two_pubkey: Pubkey, game_id: String)]`.

```js
assert.fail();
```

## 53

### --description--

Within `lib.rs`, add the `game_id` parameter as a seed to the `seeds` value of the `game` account.

### --tests--

The `game` field should be annotated with `#[account(seeds = [b"game", player_one.key().as_ref(), game_id.as_bytes()])]`.

```js
assert.fail();
```

## 54

### --description--

To prevent Rust from complaining about the `game_id` parameter not being used, prefix it with an underscore.

### --tests--

The `game_id` parameter should be prefixed with an underscore in the `setup_game` instruction handler.

```js
assert.fail();
```

The `game_id` parameter should be prefixed with an underscore in the `instruction` attribute.

```js
assert.fail();
```

The `game_id` parameter should be prefixed with an underscore in the `game` account's `seeds` value.

```js
assert.fail();
```

## 55

### --description--

Run the tests to see if the `setup_game` instruction handler is working correctly.

### --tests--

The test for `setup_game` should pass when `anchor test --skip-local-validator`.

```js
assert.fail();
```

You should be in the `tic-tac-toe` directory.

```js
assert.fail();
```

The validator should be running at `http://localhost:8899`.

```js
const command = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '{"jsonrpc":"2.0","id":1, "method":"getHealth"}'`;
const { stdout, stderr } = await __helpers.getCommandOutput(command);
try {
  const jsonOut = JSON.parse(stdout);
  assert.deepInclude(jsonOut, { result: 'ok' });
} catch (e) {
  assert.fail(e, 'Try running `solana-test-validator` in a separate terminal');
}
```

### --seed--

#### --"tic-tac-toe/tests/tic-tac-toe.ts"--

```typescript
import {
  AnchorError,
  Program,
  AnchorProvider,
  setProvider,
  workspace
} from '@coral-xyz/anchor';
import { TicTacToe } from '../target/types/tic_tac_toe';
import { expect } from 'chai';
import { Keypair, PublicKey } from '@solana/web3.js';
import { Wallet } from '@coral-xyz/anchor/dist/cjs/provider';

describe('tic-tac-toe', () => {
  // Configure the client to use the local cluster.
  setProvider(AnchorProvider.env());

  const program = workspace.TicTacToe as Program<TicTacToe>;
  const programProvider = program.provider as AnchorProvider;

  it('setup game!', async () => {
    // const playerOne = programProvider.wallet;
    const playerOne = Keypair.generate();
    const playerTwo = Keypair.generate();

    const gameId = 'game-1';

    const [gamePublicKey, _] = PublicKey.findProgramAddressSync(
      [
        anchor.utils.bytes.utf8.encode(seed),
        publicKey.toBuffer(),
        gameId.toBuffer()
      ],
      program.programId
    );

    // Airdrop to playerOne
    const sg = await programProvider.connection.requestAirdrop(
      playerOne.publicKey,
      1_000_000_000
    );
    await programProvider.connection.confirmTransaction(sg);

    await program.methods
      .setupGame(playerTwo.publicKey, gameId)
      .accounts({
        playerOne: playerOne.publicKey
      })
      .signers([playerOne])
      .rpc();

    const gameData = await program.account.game.fetch(gamePublicKey);

    expect(gameData.turn).to.equal(1);
    expect(gameData.players).to.eql([playerOne.publicKey, playerTwo.publicKey]);

    expect(gameData.state).to.eql({ active: {} });
    expect(gameData.board).to.eql([
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]);
  });

  xit('player one wins!', async () => {
    const playerOne = programProvider.wallet;
    const playerTwo = Keypair.generate();

    const gameId = 'game-2';

    const [gamePublicKey, _] = PublicKey.findProgramAddressSync(
      [
        anchor.utils.bytes.utf8.encode(seed),
        publicKey.toBuffer(),
        gameId.toBuffer()
      ],
      program.programId
    );

    await program.methods
      .setupGame(playerTwo.publicKey, gameId)
      .accounts({
        playerOne: playerOne.publicKey
      })
      // .signers([playerOne])
      .rpc();

    let gameState = await program.account.game.fetch(gamePublicKey);
    expect(gameState.turn).to.equal(1);
    expect(gameState.players).to.eql([
      playerOne.publicKey,
      playerTwo.publicKey
    ]);
    expect(gameState.state).to.eql({ active: {} });
    expect(gameState.board).to.eql([
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]);

    await play(
      program,
      gamePublicKey,
      playerOne,
      { row: 0, column: 0 },
      2,
      { active: {} },
      [
        [{ x: {} }, null, null],
        [null, null, null],
        [null, null, null]
      ]
    );

    try {
      await play(
        program,
        gamePublicKey,
        playerOne, // same player in subsequent turns
        // change sth about the tx because
        // duplicate tx that come in too fast
        // after each other may get dropped
        { row: 1, column: 0 },
        2,
        { active: {} },
        [
          [{ x: {} }, null, null],
          [null, null, null],
          [null, null, null]
        ]
      );
      chai.assert(false, "should've failed but didn't ");
    } catch (_err) {
      expect(_err).to.be.instanceOf(AnchorError);
      const err: AnchorError = _err;
      expect(err.error.errorCode.code).to.equal('NotPlayersTurn');
      expect(err.error.errorCode.number).to.equal(6003);
      expect(err.program.equals(program.programId)).is.true;
      expect(err.error.comparedValues).to.deep.equal([
        playerTwo.publicKey,
        playerOne.publicKey
      ]);
    }

    await play(
      program,
      gamePublicKey,
      playerTwo,
      { row: 1, column: 0 },
      3,
      { active: {} },
      [
        [{ x: {} }, null, null],
        [{ o: {} }, null, null],
        [null, null, null]
      ]
    );

    await play(
      program,
      gamePublicKey,
      playerOne,
      { row: 0, column: 1 },
      4,
      { active: {} },
      [
        [{ x: {} }, { x: {} }, null],
        [{ o: {} }, null, null],
        [null, null, null]
      ]
    );

    try {
      await play(
        program,
        gamePublicKey,
        playerTwo,
        { row: 5, column: 1 }, // out of bounds row
        4,
        { active: {} },
        [
          [{ x: {} }, { x: {} }, null],
          [{ o: {} }, null, null],
          [null, null, null]
        ]
      );
      chai.assert(false, "should've failed but didn't ");
    } catch (_err) {
      expect(_err).to.be.instanceOf(AnchorError);
      const err: AnchorError = _err;
      expect(err.error.errorCode.number).to.equal(6000);
      expect(err.error.errorCode.code).to.equal('TileOutOfBounds');
    }

    await play(
      program,
      gamePublicKey,
      playerTwo,
      { row: 1, column: 1 },
      5,
      { active: {} },
      [
        [{ x: {} }, { x: {} }, null],
        [{ o: {} }, { o: {} }, null],
        [null, null, null]
      ]
    );

    try {
      await play(
        program,
        gamePublicKey,
        playerOne,
        { row: 0, column: 0 },
        5,
        { active: {} },
        [
          [{ x: {} }, { x: {} }, null],
          [{ o: {} }, { o: {} }, null],
          [null, null, null]
        ]
      );
      chai.assert(false, "should've failed but didn't ");
    } catch (_err) {
      expect(_err).to.be.instanceOf(AnchorError);
      const err: AnchorError = _err;
      expect(err.error.errorCode.number).to.equal(6001);
    }

    await play(
      program,
      gamePublicKey,
      playerOne,
      { row: 0, column: 2 },
      5,
      { won: { winner: playerOne.publicKey } },
      [
        [{ x: {} }, { x: {} }, { x: {} }],
        [{ o: {} }, { o: {} }, null],
        [null, null, null]
      ]
    );

    try {
      await play(
        program,
        gamePublicKey,
        playerOne,
        { row: 0, column: 2 },
        5,
        { won: { winner: playerOne.publicKey } },
        [
          [{ x: {} }, { x: {} }, { x: {} }],
          [{ o: {} }, { o: {} }, null],
          [null, null, null]
        ]
      );
      chai.assert(false, "should've failed but didn't ");
    } catch (_err) {
      expect(_err).to.be.instanceOf(AnchorError);
      const err: AnchorError = _err;
      expect(err.error.errorCode.number).to.equal(6002);
    }
  });

  xit('tie', async () => {
    const playerOne = programProvider.wallet;
    const playerTwo = Keypair.generate();

    const gameId = 'game-3';
    const [gamePublicKey, _] = PublicKey.findProgramAddressSync(
      [
        anchor.utils.bytes.utf8.encode(seed),
        publicKey.toBuffer(),
        gameId.toBuffer()
      ],
      program.programId
    );

    await program.methods
      .setupGame(playerTwo.publicKey, gameId)
      .accounts({
        playerOne: playerOne.publicKey
      })
      // .signers([gameKeypair])
      .rpc();

    let gameState = await program.account.game.fetch(gamePublicKey);
    expect(gameState.turn).to.equal(1);
    expect(gameState.players).to.eql([
      playerOne.publicKey,
      playerTwo.publicKey
    ]);
    expect(gameState.state).to.eql({ active: {} });
    expect(gameState.board).to.eql([
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]);

    await play(
      program,
      gamePublicKey,
      playerOne,
      { row: 0, column: 0 },
      2,
      { active: {} },
      [
        [{ x: {} }, null, null],
        [null, null, null],
        [null, null, null]
      ]
    );

    await play(
      program,
      gamePublicKey,
      playerTwo,
      { row: 1, column: 1 },
      3,
      { active: {} },
      [
        [{ x: {} }, null, null],
        [null, { o: {} }, null],
        [null, null, null]
      ]
    );

    await play(
      program,
      gamePublicKey,
      playerOne,
      { row: 2, column: 0 },
      4,
      { active: {} },
      [
        [{ x: {} }, null, null],
        [null, { o: {} }, null],
        [{ x: {} }, null, null]
      ]
    );

    await play(
      program,
      gamePublicKey,
      playerTwo,
      { row: 1, column: 0 },
      5,
      { active: {} },
      [
        [{ x: {} }, null, null],
        [{ o: {} }, { o: {} }, null],
        [{ x: {} }, null, null]
      ]
    );

    await play(
      program,
      gamePublicKey,
      playerOne,
      { row: 1, column: 2 },
      6,
      { active: {} },
      [
        [{ x: {} }, null, null],
        [{ o: {} }, { o: {} }, { x: {} }],
        [{ x: {} }, null, null]
      ]
    );

    await play(
      program,
      gamePublicKey,
      playerTwo,
      { row: 0, column: 1 },
      7,
      { active: {} },
      [
        [{ x: {} }, { o: {} }, null],
        [{ o: {} }, { o: {} }, { x: {} }],
        [{ x: {} }, null, null]
      ]
    );

    await play(
      program,
      gamePublicKey,
      playerOne,
      { row: 2, column: 1 },
      8,
      { active: {} },
      [
        [{ x: {} }, { o: {} }, null],
        [{ o: {} }, { o: {} }, { x: {} }],
        [{ x: {} }, { x: {} }, null]
      ]
    );

    await play(
      program,
      gamePublicKey,
      playerTwo,
      { row: 2, column: 2 },
      9,
      { active: {} },
      [
        [{ x: {} }, { o: {} }, null],
        [{ o: {} }, { o: {} }, { x: {} }],
        [{ x: {} }, { x: {} }, { o: {} }]
      ]
    );

    await play(
      program,
      gamePublicKey,
      playerOne,
      { row: 0, column: 2 },
      9,
      { tie: {} },
      [
        [{ x: {} }, { o: {} }, { x: {} }],
        [{ o: {} }, { o: {} }, { x: {} }],
        [{ x: {} }, { x: {} }, { o: {} }]
      ]
    );
  });
});

async function play(
  program: Program<TicTacToe>,
  game: PublicKey,
  player: Wallet | Keypair,
  tile: { row: number; column: number },
  expectedTurn: number,
  expectedGameState:
    | { active: {} }
    | { won: { winner: PublicKey } }
    | { tie: {} },
  expectedBoard: Array<Array<{ x: {} } | { o: {} } | null>>
) {
  await program.methods
    .play(tile)
    .accounts({
      player: player.publicKey,
      game
    })
    .signers(player instanceof Keypair ? [player] : [])
    .rpc();

  const gameState = await program.account.game.fetch(game);

  expect(gameState.turn).to.equal(expectedTurn);
  expect(gameState.state).to.eql(expectedGameState);
  expect(gameState.board).to.eql(expectedBoard);
}
```

## 56

### --description--

Within `lib.rs`, define another instruction handler called `play`. It should take a `ctx` parameter of type `Context<Play>`, and return a `Result<()>`.

### --tests--

The `play` instruction handler should be defined.

```js
assert.fail();
```

The `play` instruction handler should take a `ctx` parameter of type `Context<Play>`.

```js
assert.fail();
```

The `play` instruction handler should return a `Result<()>`.

```js
assert.fail();
```

## 57

### --description--

Within `lib.rs`, define a new public struct `Play` that implements the `Accounts` trait.

### --tests--

The `Play` struct should be defined.

```js
assert.fail();
```

The `Play` struct should implement the `Accounts` trait.

```js
assert.fail();
```

## 58

### --description--

The `play` instruction handler will need access to the `game` account.

Within `Play`, define a field called `game` of type `Account<'info, Game>`.

### --tests--

The `game` field should be defined.

```js
assert.fail();
```

The `game` field should be of type `Account<'info, Game>`.

```js
assert.fail();
```

The `Play` struct should take a generic lifetime parameter `'info`.

```js
assert.fail();
```

## 59

### --description--

The `play` instruction handler will need access to the player who called it.

Within `Play`, define a field called `player` of type `Signer<'info>`.

### --tests--

The `player` field should be defined.

```js
assert.fail();
```

The `player` field should be of type `Signer<'info>`.

```js
assert.fail();
```

## 60

### --description--

Within the `play` instruction handler, declare a variable `game`, and assign a mutable reference to the `game` account to it.

### --tests--

The `game` variable should be declared.

```js
assert.fail();
```

The `game` variable should be assigned `&mut ctx.accounts.game`.

```js
assert.fail();
```

## 61

### --description--

Along with the `require!` macro, Anchor provides a `require_keys_eq!` macro. This macro takes two public keys, and ensures they are equal:

```rust
require_keys_eq!(
  ctx.accounts.account_1.key(),
  ctx.accounts.account_2.key(),
  OptionalCustomError::MyError
);
```

**Note:** This is specifically provided, because the `require_eq!` macro should not be used to compare public keys.

Within the `play` instruction handler, use the `require_keys_eq!` macro to ensure the expected current player is the same as the player who called the instruction.

### --tests--

`play` should have `require_keys_eq!(game.current_player(), ctx.accounts.player.key());`.

```js
assert.fail();
```

## 62

### --description--

Add a third argument of `TicTacToeError::NotPlayersTurn` to the `require_keys_eq!` macro. Also, define the `NotPlayersTurn` error variant in the `TicTacToeError` enum.

### --tests--

`play` should have `require_keys_eq!(game.current_player(), ctx.accounts.player.key(), TicTacToeError::NotPlayersTurn);`.

```js
assert.fail();
```

`TicTacToeError` should have a `NotPlayersTurn` variant.

```js
assert.fail();
```

## 63

### --description--

Within the `play` instruction handler, call the `play` method on the `game` account. Pass in a reference to a variable `tile`.

### --tests--

`play` should have `game.play(&tile);`.

```js
assert.fail();
```

## 64

### --description--

Adjust the `play` instruction handler signature to take a `tile` parameter of type `Tile`.

### --tests--

`play` should take a `tile` parameter of type `Tile`.

```js
assert.fail();
```

## 65

### --description--

Run the tests.

### --tests--

The tests for the `play` instruction handler should error ❌.

```js
assert.fail();
```

You should be in the `tic-tac-toe` directory.

```js
assert.fail();
```

The validator should be running at `http://localhost:8899`.

```js
const command = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '{"jsonrpc":"2.0","id":1, "method":"getHealth"}'`;
const { stdout, stderr } = await __helpers.getCommandOutput(command);
try {
  const jsonOut = JSON.parse(stdout);
  assert.deepInclude(jsonOut, { result: 'ok' });
} catch (e) {
  assert.fail(e, 'Try running `solana-test-validator` in a separate terminal');
}
```

## 66

### --description--

The tests failed, because a mutable reference to the `game` account is required, but the account is not marked as `mut`.

Mark the `game` account as `mut`.

### --tests--

The `Play` struct should have `game` annotated with `#[account(mut)]`.

```js
assert.fail();
```

## 67

### --description--

Run the tests to ensure everything is working as expected.

### --tests--

All tests should pass for the `anchor test --skip-local-validator` command ✅.

```js
assert.fail();
```

You should be in the `tic-tac-toe` directory.

```js
assert.fail();
```

The validator should be running at `http://localhost:8899`.

```js
const command = `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '{"jsonrpc":"2.0","id":1, "method":"getHealth"}'`;
const { stdout, stderr } = await __helpers.getCommandOutput(command);
try {
  const jsonOut = JSON.parse(stdout);
  assert.deepInclude(jsonOut, { result: 'ok' });
} catch (e) {
  assert.fail(e, 'Try running `solana-test-validator` in a separate terminal');
}
```

## 68

### --description--

**Summary**

- Derive `Accounts` for context structs
- Annotate custom accounts with `#[account]`
- Annotate custom errors with `#[error_code]`
- Use the `instruction` attribute to access the instruction data
- Anchor provides various account constraints:
  - `init` - Initialises an account, setting the owner field of the created account to the currently executing program
  - `mut` - Checks the given account is mutable, and persists any state changes
- The `Account` struct verifies program ownership
- The `Signer` struct verifies the account in the transaction also signed the transaction
- The `Program` struct validates the account provided is the given program

🎆

Once you are done, enter `done` in the terminal.

### --tests--

You should enter `done` in the terminal

```js
const lastCommand = await __helpers.getLastCommand();
assert.include(lastCommand, 'done');
```

## --fcc-end--