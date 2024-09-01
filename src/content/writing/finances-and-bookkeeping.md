---
collection: writing
date: 2023-09-27
description: An overview of how I use plain text accounting and beancount to manage my finances
slug: finances-and-bookkeeping
lastmod: 2024-08-21
publish: true
tags:
  - plain text
title: Finances and Bookkeeping
toc: true
---

I spent my free time this last month to learn some personal finance and, specifically, how to do personal bookkeeping. I did this so that I can have a more complete view of all of my accounts and how I am spending money.

I developed a good system that I think will work for me nicely now and is durable and robust enough to serve me for a long time.

Note that this finance system is basically just the bookkeeping aspect of it. It does not have any element of budgeting, though that may change in the future. Also note that I am not an accountant. I'm just a guy with a very simple financial life that learned some personal finance concepts on the internet.

## The Theory (Double Entry Accounting)

Bookkeeping is the act of keeping track of transactions. All we are doing is recording when money moves from one "pocket" (called an **account**) to another. This sounds simple but can get messy pretty quickly, hence me developing and writing about my system.

Suppose that right now, you have $100 dollars and decide to go buy a new pair of socks that cost $15. You subtract $15 from $100, maybe tag the transaction with a category ("Clothing"), and you are left with $85. You repeat this with your normal transactions, just adding and subtracting money to get a new balance each time. This type of bookkeeping is called **single entry accounting**.

Another method is **double entry accounting** that requires every entry to an account to have an equal and opposite entry in another account. **Every input to one account is an output from another.** In our sock example, you still subtract $15 from your account. But where does that money go? In the double entry accounting method, it goes into an expense account called "Clothing." So, at the end of the transaction your account has a balance of $85 and this new "Clothing" account has a balance of $15. Since every input is also an output, the transaction as a whole adds up to zero.

So, why use double entry rather than single entry? Single entry is inherently prone to errors. You only put in the transaction amount once and just keep a running tally. What if you, as a human that makes mistakes, puts in the wrong number? By essentially recording each transaction twice, double entry has checks built into it. For every transaction, it checks to make sure that it sums to zero. For the overall ledger, it makes sure that every bit of money has come from somewhere (Assets = Liabilities + Equity, if you want to get technical).

There are four main account types that we can have: `Income`, `Expenses`, `Assets`, and `Liabilities`. These are all pretty self-explanatory but I will define them here:

- **Assets.** Things that you have like cash, investments, and checking accounts.
- **Liabilities.** Things that you owe like mortgages and student loans.
- **Income.** Things that you get in exchange for something else (usually you getting money in exchange for your time)
- **Expenses.** Things that you give in exchange for something else (usually you giving money in exchange for goods and services)

Income and expense both refer to an exchange of goods and services. Assets and liabilities are set amounts. The difference here is that assets and liabilities are absolute while income and expenses are relative. What I mean by that is that you are usually interested in the balance of an asset or liability account at _one moment in time_ while you are interested in the _change between two points in time_ in expenses or income accounts. (_How much money do I have in my checking account right now?_ vs. _How much did I spend on toilet paper last month?_)

## The Tools (Plain Text Accounting and Beancount)

Now that we have the accounting theory behind the system, how do I actually implement it?

There are [many apps](https://www.investopedia.com/best-budgeting-apps-5085405) out there these days that allow you to keep track of all of your transactions. These are fine and many of them come with cool features like allowing you to import transactions from other places like bank accounts. I don't like them.

Let's say you put your entire financial life on Quicken. All your investments, expenses, and income for years. Then one day, Quicken says that if you want to keep using their service, you have to give them $100 each month. Your data is locked up in one proprietary service and it is difficult, if not impossible, to get it out and into another system. Even worse, what if the business that runs your app is no longer a business? There goes all of that data and you have to start from scratch.

Funnily enough, a few weeks after I initially posted this, this exact thing happened. Mint, a popular bookkeeping and budgeting app by Intuit, announced that it will be shutting down at the turn of the year. Intuit decided that Mint wasn't worth it to keep it running so users have no choice but to move to another tool. They, of course, pushed users to move to their other tool in Credit Karma but this new one doesn't have the same budgeting tools that Mint did. You as a user get no say in this and are under a time limit before the service is inaccessible.

> I am so legitimately upset about this. 12+ years of my financial history is about to be gone. My entire adult life.
>
> - u/NotEmmaStone

A different (and, for me, preferable) approach is to maintain it all in **plain text**. This is text that you can open on any computer and you can read. It is letters and numbers put together in a cohesive order that you can understand rather than ones and zeros that only a computer can understand. Plain text will never change its pricing structure and it will never go out of business. Even if all computers disappeared off the face of the Earth, I could still print out my ledger onto physical paper and still be able to see and understand all of my financial data.

My whole financial life, all of my transactions, my entire ledger is written down in one big plain text file. Every time I spend or earn money, I open my ledger in a text editor and type it out with my keyboard. The way that I write them down follows a specific syntax set by my financial tool of choice. The financial software parses all of that data, makes sure that each transaction sums to zero, and puts it together into useful reports. This is another benefit of having your data in plain text; it makes it **scriptable**. I can write code to process my ledger and spit out a report in any way, shape, or form that I ask.

There are currently three main choices for plain text accounting software: [Ledger](https://ledger-cli.org/), [hledger](https://hledger.org/), and my choice [beancount](https://github.com/beancount/beancount). These are all open source projects written by lots of smart people. They are also all great choices but have different philosophies and rules that govern what they look like. Again, all these do is parse your ledger file and do cool calculations and reporting with it. I went with beancount because the syntax made the most sense to me and I really liked the documentation. Also because [Derek Sivers uses it](https://sive.rs/uses).

I won't go deep into the details of beancount because there is already _excellent_ [documentation](https://beancount.github.io/docs/index.html) out there. There are also lots of parts of beancount that add functionality that I just don't use. My ledger looks something like this:

```bash
2023-09-20 * "Souq trip"
    Expenses:01-Food-and-Beverages:01-1-Food 36.00 MAD
    Expenses:03-Clothes:03-2-Footwear        30.00 MAD
    Assets:MA:Cash                          -66.00 MAD

2023-09-19 * "Cafe France" "Harira and msmen for dinner"
	Assets:MA:Cash                                -14.00 MAD
	Expenses:11-Dining-and-Staying:11-1-Eating-Out 14.00 MAD

2023-09-16 * "New York Times" "Games Subscription"
	Assets:My-Bank:Checking                     -2.00 USD
	Expenses:09-Recreation:09-4-Rec-Services     2.00 USD

2023-09-01 * "Peace Corps" "September Statement of Earnings"
	Income:Peace-Corps:Readjustment-Allowance   -400.00 USD
	Expenses:Taxes:TY2023:Medicare                 5.80 USD
	Expenses:Taxes:TY2023:Social-Security         24.80 USD
	Assets:Peace-Corps:Readjustment-Allowance    369.40 USD
	Income:Peace-Corps:Annual-Leave-Days          -2.00 PCDAYS
	Assets:Peace-Corps:Annual-Leave-Days           2.00 PCDAYS
```

Don't mind the account hierarchy yet (see below). In this snippet, I have three types of money, called **commodities**: American dollars, Moroccan dirhams, and Peace Corps leave days. Did I mention that [I'm a Peace Corps Volunteer and I live in Morocco?](/peace-corps/)

Each transaction (i.e. every time money changes hands) is given a date, an optional payee, and some narration text. Each line below that tells beancount which account it is and how much money is being added or subtracted from it and what kind of money it is. Importantly, I can go through my whole ledger and read, line by line, and understand all of my transactions. You will also notice that, according to the double entry accounting method, all of the commodities each sum to zero.

Every week, as part of a more general weekly review session, I balance my ledger. I thought "balancing your checkbook" was just something old people did but I finally understand what they mean. I sit down and open up my ledger on my computer and input any pending transactions that I have from the week. Then, I generate a **balance statement** (more on in the reporting section) that shows me exactly how much money is currently in each account. I go on my various bank apps and verify that the number on my balance statement matches what the bank says I have to make sure I didn't miss any transactions (and neither did they). I also hand-count all of my cash. There is usually a discrepancy here because I almost exclusively use cash in my day-to-day life and make small purchases often. Sometimes I forget to write down small transations or just plain lose coins. In this case, I make a balance assertion in my ledger (_hey, ledger, I know that based on your calculations I should have this amount of money but I actually have this much_) and put the difference into an `Expenses:Uncategorized` account.

## Reporting

One important aspect of any bookkeeping system is the ability to query your ledger and get reports on your financial data. In the accounting world, there are two main ones. One is an **income statement** that lists all of your income accounts and their balances on the left and all of your expense accounts and their balances on the right, for the given reporting period. If you sum up all of your income and all of your expenses, you get your net profit or loss for that period.

The income statement is the most useful to me because I can see how much I spent on each category over, say, the previous month. With this, I can be more mindful of where my money is going and make lifestyle changes, if needed.

The other main report is the **balance sheet**. This one, you might have guessed, lists all of your asset accounts and their current balances on the left and all of your liability accounts and their current balances on the right. Remember that these types of accounts are absolute; we are only interested in the balance at a specific time rather than a time period. If you sum up all of your assets and all of your liabilities, you get your net worth.

## Expense Categories (COICOP)

Now, as we saw above, every time you spend money on something, that money goes into an `Expense` account. You need to have some structure and granularity here so you can see exactly what you are spending your money on. There is a sweet spot between your expense categories being too granular (I spent X dollars on breakfast cereal, Y dollars on ground beef, and Z dollars on butter) and too broad (I spent X dollars on "Living Expenses"). Expense categories should be just detailed enough to provide insights into your financial life without being cumbersome.

The general consensus that I found online was to just track your expenses and figure it out as you go to develop meaningful expense categories. That didn't feel right to me. It made more sense to have a set structure from the get-go and push transactions into those as I go. So, I did some cherry-picking and came across [a whitepaper](https://unstats.un.org/unsd/classifications/unsdclassifications/#coicop) published by the United Nations Statistics Division. It is titled "Classification of Individual Consumption According to Purpose (COICOP) 2018."

Basically, COICOP is an international standard to classify household expenditure. It is a framework that allows for all kinds of cool statistics to be calculated like CPI, living standards analysis, budget surveys, and stats related to food and tourism. It splits up household expenses into increasingly fine-grained categories starting from a division (_01 Food and non-alcoholic beverage_) to a group (_01.1 Food_) to classes (_01.1.1 Cereals and cereal products_) and further down to subclasses (_01.1.1.3 Bread and bakery products_). These are all organized by the purpose of the expense. The current 2018 revision has 15 divisions, 63 groups, 186 classes, and 338 subclass categories.

I decided to use COICOP for my personal finances for three reasons:

- **Unambiguous.** There is a giant 265 page document that outlines exactly what categories a certain expense falls into.
- **Thought out.** Lots of people much smarter than me spent way more time than I ever will thinking about this.
- **Standardized.** I can see how my expenses compare with others using the same standard (lots of stats available online).

To avoid the problem of being too fine-grained, I opted for using the broad structure (chapter VIII in the whitepaper) which only goes down to groups meaning each expense category is defined by a three digit code _DD.G_ where _DD_ is the division number and _G_ is the group number. I live a simple life and some expenses don't make sense for me so I cut them out of my chart of accounts but I can always add them back later. Using the entire broad structure, there are 52 possible "buckets" all of my expenses can fall into. With the accounts I don't need cut out, I actually have 20. My actual chart of accounts for my expenses looks like this:

```bash
`-- Expenses
    |-- 01-Food-and-Beverages
    |   |-- 01-1-Food
    |   `-- 01-2-Beverages
    |-- 02-Alcohol-and-Tobacco
    |   |-- 02-1-Alcohol
    |   `-- 02-3-Tobacco
    |-- 03-Clothes
    |   |-- 03-1-Clothing
    |   `-- 03-2-Footwear
    |-- 04-Living
    |   |-- 04-1-Rent
    |   |-- 04-4-Water
    |   `-- 04-5-Electricity-and-Fuel
    |-- 07-Transport
    |   `-- 07-3-Passenger
    |-- 08-Info-and-Comms
    |   |-- 08-1-Info-and-Comms-Equipment
    |   |-- 08-2-Software
    |   `-- 08-3-Info-and-Comms-Services
    |-- 09-Recreation
    |   |-- 09-4-Rec-Services
    |   `-- 09-7-Books-and-Stationery
    |-- 11-Dining-and-Staying
    |   |-- 11-1-Eating-Out
    |   `-- 11-2-Accommodations
    |-- 12-Ins-and-Financial
    |   `-- 12-2-Financial-Services
    |-- 13-Personal
        |-- 13-1-Personal-Care
        `-- 13-9-Other
```

## Lending and Borrowing Money

What about money that we are owed? It is technically money that we have (i.e. an asset), it just isn't liquid or usable right now. In this case, we want to keep it in a separate account to know who owes us how much as well as keep it separate in case we want to know how much liquid money we have. I use an `Asset:Accounts-Receivable` account to track who owes me money. Everything in this account is money that I "have" but just haven't received yet. Notably, I don't put someone paying me back in an `Income` account because it isn't really income. I haven't traded anything valuable for it. The transactions usually go something like this:

I pay cash for a taxi to take me from my town to some other big city to attend a Peace Corps training, a reimbursable expense. I paid cash but where did that money go? It does not go into an expense account because I'm not really spending money on the taxi, Peace Corps is. I am just loaning them the cash right now so it is just one type of asset being turned into a different kind. Instead of an expense account, I dump it into my accounts receivable and mark who owes me (i.e. the debtor).

```bash
2023-09-27 * "Travel to training"
  Assets:MA:Cash                        -100.00 MAD
  Assets:Accounts-Receivable             100.00 MAD
	  debtor: "Peace Corps"
```

Now, since my accounts receivable has a balance of 100 dirhams, I know that I am owed that. After the training, I fill out a reimbursement form and wait a few weeks. Once that hits my bank account, I record it in my ledger as that money moving from the accounts receivable to my bank account where it is liquid again.

```bash
2023-10-10 * "Reimbursement from travel to training"
  Assets:Accounts-Receivable             -100.00 MAD
	  debtor: "Peace Corps"
  Assets:MA:Checking                      100.00 MAD
```

On the other hand, I use a `Liabilities:Accounts-Payable` account to keep a record of who I owe money to and how much. This functions similarly to above except this time there is an actual expense. For example:

I go out to have dinner with a friend while I am in the city at this training but I forgot my wallet. I get 50 dirhams worth of food but where does that money come from? I am not yet exchanging an asset for the food. Instead, I am borrowing money from my friend so it goes into my accounts payable and I mark who I owe money to (i.e. the creditor).

```bash
2023-09-28 * "Dinner in training city"
  Expenses:11-Dining-and-Staying:11-1-Eating-Out 50.00 MAD
  Liabilities:Accounts-Payable                  -50.00 MAD
	  creditor: "My Friend"
```

To pay my friend back, I give them cash when I get back to my wallet.

```bash
2023-09-28 * "Paying back friend"
  Assets:MA:Cash                        -50.00 MAD
  Liabilities:Accounts-Payable           50.00 MAD
	  creditor: "My Friend"
```

## Lending and Borrowing Goods and Services (Accrual Accounting)

You may have noticed in the last section that expenses happen when the _good or service is exchanged_ not the actual money. When I went out for dinner, I accrued the expenses then and there, not when I paid back my friend later. This is the basis of [accrual accounting.](https://www.investopedia.com/terms/a/accrualaccounting.asp)

But what happens when I pay for something in advance? I've given someone money but I haven't received a good or service. The other party owes me but it's not money. For example, I see my landlord a few days before rent is due and I pay him then or I buy plane tickets now for a trip a few months later.

In this situation, accounts payable and receivable don't make very much sense. These accounts are for when actual money is payable or receivable. When goods or services are owed, I use different accounts: **prepaid expenses** (asset) and **deferred revenue** (liability).

In a travel example, it would look like this:

```bash
2024-08-20 * "Plane ticket to Toronto"
	Assets:Checking                          -691.00 USD
	Assets:Prepaid-Expense                    691.00 USD
		debtor: "Air Canada"
```

It still counts as an asset because I should still receive a service in the future, namely a ride on an airplane. Also notice how I haven't incurred an expense yet. That comes later when I actually get on the plane and the actual service is provided. After this, the transaction is complete and that money is no longer an asset:

```bash
2024-11-29 * "Flying to Toronto"
	Assets:Prepaid-Expense                -691.00 USD
		debtor: "Air Canada"
	Expenses:07-Transport:07-3-Passenger   691.00 USD
```

Deferred revenue works the same way. If my neighbor pays me in advance to mow their lawn next weekend, that amount would end up in `Liabilities:Deferred-Revenue`. It is a liability because I am still liable to either mow their lawn or return their money.

## References and Further Reading

- Excellent write-up of [double entry counting method](https://beancount.github.io/docs/the_double_entry_counting_method.html), as part of the beancount documentation.
- A [set of scenarios](https://plaintextaccounting.org/Splitting-the-bill) for splitting a bill. The transactions look different depending on who pays and how it is split.
- A collection of [resources, examples, tools, and everything else](https://plaintextaccounting.org/) by plaintextaccounting.org.
- More on [accrual counting and types of accruals](https://online.hbs.edu/blog/post/what-is-accrual-accounting) by Harvard Business School.
