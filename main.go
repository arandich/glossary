package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
)

func main() {
	http.HandleFunc("/glossary", GlossaryHandler)
	http.HandleFunc("/semantic-graph", SemanticGraphHandler)

	port := 8080
	fmt.Printf("Server is running on :%d...\n", port)
	err := http.ListenAndServe(fmt.Sprintf(":%d", port), nil)
	if err != nil {
		fmt.Printf("Error starting the server: %v\n", err)
	}
}

func GlossaryHandler(w http.ResponseWriter, r *http.Request) {
	data, err := readFile("storage/glossary.json")
	if err != nil {
		log.Printf("Error reading glossary data: %v", err)
		http.Error(w, "Error reading glossary data", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	_, err = w.Write(data)
	if err != nil {
		log.Printf("Error writing response: %v", err)
		return
	}
}

func SemanticGraphHandler(w http.ResponseWriter, r *http.Request) {
	data, err := readFile("storage/mindMap.json")
	if err != nil {
		http.Error(w, "Error reading semantic graph data", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	_, err = w.Write(data)
	if err != nil {
		log.Printf("Error writing response: %v", err)
		return
	}
}

func readFile(filePath string) ([]byte, error) {
	content, err := os.ReadFile(filePath)
	if err != nil {
		return nil, err
	}

	return content, nil
}
