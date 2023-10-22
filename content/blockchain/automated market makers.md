---
title: Automated Market Makers
date: 2023-10-22
tags:
  - tokenomics
---

### Summary:

Automated Market Makers (AMMs) revolutionize cryptocurrency trading by employing algorithms to balance supply and demand.

Picture a world where bananas and tomatoes are traded. AMMs, like the constant product formula 
$$x*y=k$$

ensure that the product of the quantities of assets remains constant, maintaining market equilibrium.

Traders interact with liquidity pools, adjusting prices dynamically as they trade, demonstrating the power and flexibility of AMMs in decentralized finance.

---

## Understanding Automated Market Makers (AMMs):

Imagine living in a village abundant with bananas but lacking tomatoes. A trader arrives, offering tomatoes from a neighboring village. Together, you establish an exchange, pooling 50,000 tomatoes and 50,000 bananas into a [[liquidity pool]]. A magical genie (or the algorithm) maintains a constant product (k = 2.5 billion), ensuring a balanced market for both assets.

## How the AMM Algorithm Works:

1. **Initial Setup:**
   - 50,000 tomatoes and 50,000 bananas are placed in the liquidity pool, maintaining a 1:1 ratio and a total constant value of 2.5 billion. assuming each banana and a tomato cost $1 each

2. **Example Trade**
   - A banana farmer offers 7,000 bananas. The algorithm calculates the new tomato quantity using the constant product formula. Due to increased demand, the farmer receives fewer tomatoes, demonstrating the price adjustment mechanism.
     
     **Here is How**
     when you give 7000 bananas to the pool, now the pool has 57000 bananas
     from the formula above we can calculate how many tomatoes we can get
     
     so tomatoes needed in the pool  = 2.5 billion / 57000 = 43859.65
     
     This is the number of tomatoes needed in the pool to maintain the constant of 2.5 billion
     
     so the person gets approx 6140 tomatoes 
     
     now the price of single tomato is $1.139 as we have 43860 tomatoes for $50k  and each banana costs $0.877 as we have 57k bananas for $50k
     simple math to calculate the price (50k/available fruits, for example for tomatoes each costs 50k/43860)


- So now you understood how the supply and demand works


3. **Price Adjustments:**
   - As traders bring more assets into the pool, the algorithm recalculates prices to maintain the constant product, adjusting prices based on the changing quantities of bananas and tomatoes. Increased supply leads to lower prices, ensuring fair market value.

4. **Trader's Influence on Prices:**
   - The more assets a trader exchanges, the more prices change. For instance, when a trader adds 10,000 bananas, the algorithm recalculates prices, and the trader might receive fewer tomatoes due to increased demand for tomatoes.

5. **Complex Scenarios:**
   - Real-world scenarios involve various assets in liquidity pools, adding complexity to calculations. However, the fundamental principle of maintaining the constant product remains, enabling AMMs to adapt to diverse market conditions.

6. **Liquidity Providers and Rewards:**
   - Liquidity providers receive a fraction of each trade as a reward, encouraging their participation. These rewards, although small, accumulate with frequent trading, making it profitable for investors contributing to liquidity pools.

7. **Handling Prices:** - AMMs handle high inflation by using big trading places. When there are lots of bananas and tomatoes in the trading place, the prices don’t change too much when people trade.
    So basically if you have 20 million pool instead of 50,000 even if you want to exchange 10,000 banana you would get it for $1 itself, so until there is actual demand from the market, the price does not rise


## Conclusion:

Automated Market Makers play a pivotal role in decentralized finance, offering a dynamic and efficient way to trade cryptocurrencies.

By understanding the constant product formula and how it applies to assets like bananas and tomatoes, one can appreciate the elegance and flexibility of AMMs. As the crypto market evolves, AMMs continue to drive innovation, ensuring fair and adaptive trading experiences for all participants.

You can also make money by providing liquidity :)

