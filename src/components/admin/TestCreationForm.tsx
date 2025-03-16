
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { Question } from "@/types";
import { Plus, Trash, Clock, Award, DollarSign } from "lucide-react";

const TestCreationForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("NISM");
  const [subcategory, setSubcategory] = useState("");
  const [type, setType] = useState("chapter-wise");
  const [duration, setDuration] = useState(12);
  const [fee, setFee] = useState(99);
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: "1",
      text: "",
      options: ["", "", "", ""],
      correctAnswers: [],
      type: "single",
      marks: 1,
      negativeMarks: 0.25,
    },
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Define subcategories based on selected category
  const [subcategories, setSubcategories] = useState<string[]>([]);

  useEffect(() => {
    if (category === "NISM") {
      setSubcategories([
        "NISM-Series-I: Currency Derivatives",
        "NISM-Series-II-A: Registrars to an Issue and Share Transfer Agents - Corporate",
        "NISM-Series-II-B: Registrars to an Issue and Share Transfer Agents - Mutual Fund",
        "NISM-Series-III-A: Securities Intermediaries Compliance (Non-Fund)",
        "NISM-Series-III-B: Issuers Compliance",
        "NISM-Series-IV: Interest Rate Derivatives",
        "NISM-Series-V-A: Mutual Fund Distributors",
        "NISM-Series-V-B: Mutual Fund Foundation",
        "NISM-Series-V-C: Mutual Fund Distributors (Level 2)",
        "NISM-Series-VI: Depository Operations",
        "NISM-Series-VII: Securities Operations and Risk Management",
        "NISM-Series-VIII: Equity Derivatives",
        "NISM-Series-IX: Merchant Banking",
        "NISM-Series-X-A: Investment Adviser (Level 1)",
        "NISM-Series-X-B: Investment Adviser (Level 2)",
        "NISM-Series-XII: Securities Markets Foundation",
        "NISM-Series-XIII: Common Derivatives",
        "NISM-Series-XIV: Internal Auditors for Stock Brokers",
        "NISM-Series-XV: Research Analyst",
        "NISM-Series-XVI: Commodity Derivatives",
        "NISM-Series-XVII: Retirement Adviser",
        "NISM-Series-XVIII: Financial Education",
      ]);
      // Set default subcategory
      setSubcategory("NISM-Series-I: Currency Derivatives");
    } else if (category === "GATE") {
      setSubcategories([
        "Computer Science and Information Technology",
        "Electronics and Communication Engineering",
        "Electrical Engineering",
        "Mechanical Engineering",
        "Civil Engineering",
        "Chemical Engineering",
      ]);
      // Set default subcategory
      setSubcategory("Computer Science and Information Technology");
    } else {
      setSubcategories([]);
      setSubcategory("");
    }

    // Update duration based on type and category
    if (category === "NISM") {
      setDuration(12);
      setType("chapter-wise");
    } else if (category === "GATE") {
      if (type === "section-wise") {
        setDuration(20);
      } else if (type === "full-length") {
        setDuration(180);
      }
    }
  }, [category, type]);

  const addQuestion = () => {
    setQuestions([
      ...questions,
      {
        id: (questions.length + 1).toString(),
        text: "",
        options: ["", "", "", ""],
        correctAnswers: [],
        type: "single",
        marks: 1,
        negativeMarks: 0.25,
      },
    ]);
  };

  const removeQuestion = (index: number) => {
    if (questions.length > 1) {
      const updatedQuestions = [...questions];
      updatedQuestions.splice(index, 1);
      setQuestions(updatedQuestions);
    } else {
      toast({
        title: "Error",
        description: "There must be at least one question in the test",
        variant: "destructive",
      });
    }
  };

  const updateQuestion = (index: number, field: keyof Question, value: any) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index] = {
      ...updatedQuestions[index],
      [field]: value,
    };
    setQuestions(updatedQuestions);
  };

  const updateOption = (questionIndex: number, optionIndex: number, value: string) => {
    const updatedQuestions = [...questions];
    const options = [...updatedQuestions[questionIndex].options];
    options[optionIndex] = value;
    updatedQuestions[questionIndex] = {
      ...updatedQuestions[questionIndex],
      options,
    };
    setQuestions(updatedQuestions);
  };

  const toggleCorrectAnswer = (questionIndex: number, optionIndex: number) => {
    const updatedQuestions = [...questions];
    const question = { ...updatedQuestions[questionIndex] };
    
    if (question.type === "single") {
      // For single choice, only one answer can be correct
      question.correctAnswers = [optionIndex];
    } else {
      // For multiple choice, toggle the answer
      const correctAnswers = [...question.correctAnswers];
      const index = correctAnswers.indexOf(optionIndex);
      
      if (index === -1) {
        correctAnswers.push(optionIndex);
      } else {
        correctAnswers.splice(index, 1);
      }
      
      question.correctAnswers = correctAnswers;
    }
    
    updatedQuestions[questionIndex] = question;
    setQuestions(updatedQuestions);
  };

  const isCorrectAnswer = (questionIndex: number, optionIndex: number) => {
    return questions[questionIndex].correctAnswers.includes(optionIndex);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validation
    if (!title) {
      toast({
        title: "Error",
        description: "Please enter a test title",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    if (questions.some(q => !q.text || q.options.some(o => !o) || q.correctAnswers.length === 0)) {
      toast({
        title: "Error",
        description: "Please fill all questions, options, and mark at least one correct answer for each question",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // In a real app, we would call an API to save the test
    // For demo, we'll simulate success
    setTimeout(() => {
      toast({
        title: "Success",
        description: "Test created successfully",
        variant: "default",
      });
      
      // Reset form
      setTitle("");
      setDescription("");
      setQuestions([
        {
          id: "1",
          text: "",
          options: ["", "", "", ""],
          correctAnswers: [],
          type: "single",
          marks: 1,
          negativeMarks: 0.25,
        },
      ]);
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <form onSubmit={handleSubmit}>
        <Card className="mb-6 glass">
          <CardHeader>
            <CardTitle>Test Information</CardTitle>
            <CardDescription>
              Enter the basic details of your test
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Test Title</Label>
                <Input
                  id="title"
                  placeholder="Enter test title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description (Optional)</Label>
                <Textarea
                  id="description"
                  placeholder="Enter test description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={3}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select
                  value={category}
                  onValueChange={(value) => setCategory(value as "NISM" | "GATE")}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="NISM">NISM Certification</SelectItem>
                    <SelectItem value="GATE">GATE Exam</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subcategory">Subcategory</Label>
                <Select
                  value={subcategory}
                  onValueChange={setSubcategory}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select subcategory" />
                  </SelectTrigger>
                  <SelectContent>
                    {subcategories.map((sub) => (
                      <SelectItem key={sub} value={sub}>
                        {sub}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="type">Test Type</Label>
                <Select
                  value={type}
                  onValueChange={setType}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select test type" />
                  </SelectTrigger>
                  <SelectContent>
                    {category === "NISM" ? (
                      <SelectItem value="chapter-wise">Chapter-wise</SelectItem>
                    ) : (
                      <>
                        <SelectItem value="section-wise">Section-wise</SelectItem>
                        <SelectItem value="full-length">Full-length</SelectItem>
                      </>
                    )}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="duration" className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  Duration (minutes)
                </Label>
                <Input
                  id="duration"
                  type="number"
                  min={1}
                  value={duration}
                  onChange={(e) => setDuration(parseInt(e.target.value))}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="fee" className="flex items-center">
                  <DollarSign className="h-4 w-4 mr-1" />
                  Fee (₹)
                </Label>
                <Input
                  id="fee"
                  type="number"
                  min={0}
                  value={fee}
                  onChange={(e) => setFee(parseInt(e.target.value))}
                  required
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          {questions.map((question, questionIndex) => (
            <Card key={question.id} className="glass">
              <CardHeader className="flex flex-row items-start justify-between space-y-0">
                <div>
                  <CardTitle className="text-lg">
                    Question {questionIndex + 1}
                  </CardTitle>
                  <CardDescription>
                    Configure your question details
                  </CardDescription>
                </div>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="rounded-full h-8 w-8"
                  onClick={() => removeQuestion(questionIndex)}
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor={`question-${questionIndex}`}>
                    Question Text
                  </Label>
                  <Textarea
                    id={`question-${questionIndex}`}
                    placeholder="Enter your question"
                    value={question.text}
                    onChange={(e) =>
                      updateQuestion(questionIndex, "text", e.target.value)
                    }
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor={`question-type-${questionIndex}`}>
                      Question Type
                    </Label>
                    <Select
                      value={question.type}
                      onValueChange={(value) =>
                        updateQuestion(questionIndex, "type", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select question type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="single">Single Choice</SelectItem>
                        <SelectItem value="multiple">Multiple Choice</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor={`question-marks-${questionIndex}`}>
                      Marks
                    </Label>
                    <Select
                      value={question.marks.toString()}
                      onValueChange={(value) =>
                        updateQuestion(questionIndex, "marks", parseInt(value) as 1 | 2)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select marks" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Mark</SelectItem>
                        <SelectItem value="2">2 Marks</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`negative-marks-${questionIndex}`}>
                    Negative Marking
                  </Label>
                  <Select
                    value={question.negativeMarks.toString()}
                    onValueChange={(value) =>
                      updateQuestion(questionIndex, "negativeMarks", parseFloat(value))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select negative marks" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">No Negative Marking</SelectItem>
                      <SelectItem value="0.25">0.25 Marks</SelectItem>
                      <SelectItem value="0.5">0.5 Marks</SelectItem>
                      <SelectItem value="1">1 Mark</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label>Options</Label>
                  {question.options.map((option, optionIndex) => (
                    <div
                      key={optionIndex}
                      className="flex items-center space-x-3"
                    >
                      <Checkbox
                        id={`question-${questionIndex}-option-${optionIndex}`}
                        checked={isCorrectAnswer(questionIndex, optionIndex)}
                        onCheckedChange={() =>
                          toggleCorrectAnswer(questionIndex, optionIndex)
                        }
                      />
                      <Input
                        placeholder={`Option ${optionIndex + 1}`}
                        value={option}
                        onChange={(e) =>
                          updateOption(questionIndex, optionIndex, e.target.value)
                        }
                        className="flex-1"
                        required
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-6 flex justify-between">
          <Button
            type="button"
            variant="outline"
            onClick={addQuestion}
            className="flex items-center"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Question
          </Button>

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <span className="animate-spin mr-2">⌛</span> Creating Test...
              </>
            ) : (
              "Create Test"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TestCreationForm;
