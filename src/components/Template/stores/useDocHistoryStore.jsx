
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { isEqual } from 'lodash-es'
import PlaygroundNodes from "@/components/LexicalTemplatePlayground/lexical-playground/src/nodes/PlaygroundNodes";
import EditorTheme from "@/components/LexicalTemplatePlayground/lexical-playground/src/themes/PlaygroundEditorTheme";
import { CLEAR_EDITOR_COMMAND, createEditor } from "lexical"
import { pageAddHelper, pageDeleteHelper, pageDownHelper, pageDuplicateHelper, pageUpHelper } from "../../../lib/helpers/pageHelpers"
export const useDocHistory = create(
    (set) => ({
        undoStack: [],
        redoStack: [],
        canRedoItem: false,
        canUndoItem: false,
        addHistory: (item, type, operation, prevState = null, pages = null,allItems=null) => {
            console.log(prevState)
            console.log(pages?.length)
            set((state) => {
                let newHistory;
                const tRedoStack = [...state.redoStack];
                if (operation === 'update') {
                    if (!isEqual(item, prevState)) {
                        newHistory = { currentState: item, prevState: prevState, type, operation, pages: pages ,allItems:allItems};
                    }
                } else {
                    newHistory = { currentState: item, type, operation, prevState: prevState, pages: pages ,allItems:allItems};
                }
                let tUndoStack = [...state.undoStack]
                if (newHistory) {
                    tUndoStack = [...tUndoStack, newHistory];
                }
                let undoStatus = false
                let redoStatus = false
                if (tUndoStack?.length > 0) {
                    undoStatus = true
                }
                if (tRedoStack?.length > 0) {
                    redoStatus = true
                }
                console.log(newHistory)
                return { undoStack: tUndoStack, redoStack: tRedoStack, canUndoItem: undoStatus, canRedoItem: redoStatus };
            });
        },
        undo: (deleteItem,updateItem,addItem,addPageAt,addNewPage,deletePage,updatePage,pageDown,pageUp,itemPageUP,itemPageDown,itemPageAdd,setItems,setPages) => {
            set((state) => {
                if (state.undoStack.length === 0) return;
                const tUndoStack = [...state.undoStack];
                const actionToUndo = tUndoStack.pop();
                const tRedoStack = [...state.redoStack, actionToUndo];
                console.log(actionToUndo)
                if (actionToUndo?.type === "item") {
                    switch (actionToUndo.operation) {
                        case "add":
                            console.log(actionToUndo?.currentState)
                            deleteItem(actionToUndo.currentState)
                            break;
                        case "update":
                            console.log(actionToUndo.prevState)
                            console.log(actionToUndo.currentState)
                            updatePage(actionToUndo.currentState,actionToUndo.prevState)
                            break;
                        case "delete":
                            addItem(actionToUndo.currentState)
                            break;
                        default:
                            console.log("No item in stack")
                    }
                }
                if (actionToUndo?.type === "page") {
                    // debugger
                    const edState = actionToUndo?.prevState?.ref?.current?.getEditorState()
                    const items=actionToUndo.allItems
                    const pages = actionToUndo.pages
                    console.log(actionToUndo?.currentState)
                    console.log(items)
                    console.log(pages)
                    switch (actionToUndo.operation) {
                        case "add":
                            console.log(actionToUndo?.currentState)
                            deletePage(actionToUndo.currentState)
                            break;
                        case "update":
                            console.log(actionToUndo.prevState)
                            console.log(actionToUndo.currentState)
                            updatePage(actionToUndo?.currentState, actionToUndo.prevState)
                            break;
                        case "pageUp":
                            const pageIndex = actionToUndo?.currentState
                          
                            pageDownHelper(pageIndex, pages, pageDown, itemPageDown, null, true)
                            break;
                        case "pageDown":
                            const pgIndex = actionToUndo?.currentState + 1
                            pageUpHelper(pgIndex, pages, pageUp, itemPageUP, null, true)
                            break;
                        case "delete":
                            const initialConfig = {
                                namespace: "Playground",
                                nodes: [...PlaygroundNodes],
                                editorState: null,
                                onError: (error) => {
                                    throw error;
                                },
                                theme: EditorTheme,
                                editable: false,
                            };
                            const newEditor = createEditor({
                                ...initialConfig,
                                editorState: edState,
                            });
                            setItems(items)
                            
                            // setPages(pages)
                            addNewPage(newEditor, actionToUndo.currentState)
                            break;
                        default:
                            console.log("No item in stack")
                    }
                }
                let undoStatus = false
                let redoStatus = false
                if (tUndoStack?.length > 0) {
                    undoStatus = true
                }
                if (tRedoStack?.length > 0) {
                    redoStatus = true
                }
                console.log(tUndoStack)
                console.log(tRedoStack)
                return { undoStack: tUndoStack, redoStack: tRedoStack, canUndoItem: undoStatus, canRedoItem: redoStatus,};
            });
        },
        redo: (deleteItem,updateItem,addItem,addPageAt,addNewPage,deletePage,updatePage,pageDown,pageUp,itemPageUP,itemPageDown,itemPageAdd,setItems,setPages) => {
            set(state => {
                // debugger
                if (state.redoStack.length === 0) return;
                const tRedoStack = [...state.redoStack];
                const actionToRedo = tRedoStack.pop();
                const tUndoStack = [...state.undoStack, actionToRedo];
                console.log(actionToRedo)
                if (actionToRedo.type === "item") {
                    switch (actionToRedo.operation) {
                        case 'add':
                            addItem(actionToRedo.currentState)
                            break;
                        case 'delete':
                            deleteItem(actionToRedo?.currentState)
                            break;
                        case 'update':
                            updatePage(actionToRedo?.currentState, actionToRedo.prevState)
                            break;
                        default:
                            console.log("No item in stack")
                    }
                }
                if (actionToRedo?.type === "page") {
                    console.log(actionToRedo)
                    const edState = actionToRedo?.prevState?.ref?.current?.getEditorState()
                    console.log(edState)
                        const pages = actionToRedo.pages
                        const items=actionToRedo.allItems
                        
                        console.log(items)
                    switch (actionToRedo.operation) {
                        case "add":
                            console.log(actionToRedo?.currentState)
                            const initialConfig = {
                                namespace: "Playground",
                                nodes: [...PlaygroundNodes],
                                editorState: null,
                                onError: (error) => {
                                    throw error;
                                },
                                theme: EditorTheme,
                                editable: false,
                            };
                            const newEditor = createEditor({
                                ...initialConfig,
                                editorState: edState,
                            });
                            setItems(items)
                            addNewPage(newEditor, actionToRedo.currentState)
                            
                            // addNewPage(actionToRedo.currentState)
                            break;
                        case "pageUp":
                            const pgIndex = actionToRedo?.currentState
                            pageUpHelper(pgIndex, pages, pageUp, itemPageUP, null, true)
                            break;
                        case "pageDown":
                            const pageIndex = actionToRedo?.currentState
                            pageDownHelper(pageIndex, pages, pageDown, itemPageDown, null, true)
                            break;
                        case "update":
                            console.log(actionToRedo.prevState)
                            console.log(actionToRedo.currentState)
                            updatePage(actionToRedo?.currentState, actionToRedo.prevState)
                            break;
                        case "delete":
                            deletePage(actionToRedo.currentState)
                            break;
                        default:
                            console.log("No item in stack")
                    }
                }
                let undoStatus = false
                let redoStatus = false
                if (tUndoStack?.length > 0) {
                    undoStatus = true
                }
                if (tRedoStack?.length > 0) {
                    redoStatus = true
                }
                return { undoStack: tUndoStack, redoStack: tRedoStack, canUndoItem: undoStatus, canRedoItem: redoStatus };
            });
        },
        resetHistory: () => {
            set(() => {
                return {
                    undoStack: [],
                    redoStack: [],
                    canRedoItem: false,
                    canUndoItem: false,
                }
            })
        }
    })
)

