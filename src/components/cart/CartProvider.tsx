'use client'

import { createContext, useContext, useReducer, useCallback, ReactNode } from 'react'
import { CartItem, Product } from '@/config/site'

// ─── Types ───────────────────────────────────────────────────────────────────

interface CartState {
  items: CartItem[]
  isOpen: boolean
}

type CartAction =
  | { type: 'ADD_ITEM'; product: Product; quantity: number; size?: string; color?: string }
  | { type: 'REMOVE_ITEM'; productId: string; size?: string; color?: string }
  | { type: 'UPDATE_QTY'; productId: string; quantity: number; size?: string; color?: string }
  | { type: 'CLEAR' }
  | { type: 'OPEN' }
  | { type: 'CLOSE' }

interface CartContextValue {
  items: CartItem[]
  isOpen: boolean
  addItem: (product: Product, quantity?: number, size?: string, color?: string) => void
  removeItem: (productId: string, size?: string, color?: string) => void
  updateQuantity: (productId: string, quantity: number, size?: string, color?: string) => void
  clearCart: () => void
  openCart: () => void
  closeCart: () => void
  total: number
  itemCount: number
}

// ─── Reducer ─────────────────────────────────────────────────────────────────

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const idx = state.items.findIndex(
        i => i.product.id === action.product.id && i.size === action.size && i.color === action.color
      )
      if (idx >= 0) {
        const updated = [...state.items]
        updated[idx] = { ...updated[idx], quantity: updated[idx].quantity + action.quantity }
        return { ...state, items: updated, isOpen: true }
      }
      return {
        ...state,
        items: [...state.items, { product: action.product, quantity: action.quantity, size: action.size, color: action.color }],
        isOpen: true,
      }
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(
          i => !(i.product.id === action.productId && i.size === action.size && i.color === action.color)
        ),
      }
    case 'UPDATE_QTY':
      if (action.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(
            i => !(i.product.id === action.productId && i.size === action.size && i.color === action.color)
          ),
        }
      }
      return {
        ...state,
        items: state.items.map(i =>
          i.product.id === action.productId && i.size === action.size && i.color === action.color
            ? { ...i, quantity: action.quantity }
            : i
        ),
      }
    case 'CLEAR':
      return { ...state, items: [] }
    case 'OPEN':
      return { ...state, isOpen: true }
    case 'CLOSE':
      return { ...state, isOpen: false }
    default:
      return state
  }
}

// ─── Context ─────────────────────────────────────────────────────────────────

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], isOpen: false })

  const addItem = useCallback((product: Product, quantity = 1, size?: string, color?: string) => {
    dispatch({ type: 'ADD_ITEM', product, quantity, size, color })
  }, [])

  const removeItem = useCallback((productId: string, size?: string, color?: string) => {
    dispatch({ type: 'REMOVE_ITEM', productId, size, color })
  }, [])

  const updateQuantity = useCallback((productId: string, quantity: number, size?: string, color?: string) => {
    dispatch({ type: 'UPDATE_QTY', productId, quantity, size, color })
  }, [])

  const clearCart = useCallback(() => dispatch({ type: 'CLEAR' }), [])
  const openCart = useCallback(() => dispatch({ type: 'OPEN' }), [])
  const closeCart = useCallback(() => dispatch({ type: 'CLOSE' }), [])

  const total = state.items.reduce((sum, i) => sum + i.product.price * i.quantity, 0)
  const itemCount = state.items.reduce((sum, i) => sum + i.quantity, 0)

  return (
    <CartContext.Provider value={{ ...state, addItem, removeItem, updateQuantity, clearCart, openCart, closeCart, total, itemCount }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart doit être utilisé dans CartProvider')
  return ctx
}
