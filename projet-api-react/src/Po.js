import React, { Component } from "react";
import OpenAI from "openai";
const { OPENAI_API_KEY } = require("./Config.json");

class ChatGPT extends Component {
  state = {
    movieData: [],
    prompt: "Aimes tu la saucisse ?",
    result: "",
    loading: "",
  };

  fetchOpenAi = async (openai) => {
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.5,
        max_tokens: 1000,
      });
      this.setState({
        result: response.data.choices[0].text,
      });
    } catch (error) {
      console.error(error);
    }
  };

  componentDidMount() {
    const openai = new OpenAI({
      apiKey: OPENAI_API_KEY,
      dangerouslyAllowBrowser: true,
    });
    this.fetchOpenAi(openai);
  }

  render() {
    return <div></div>;
  }
}

export default ChatGPT;
