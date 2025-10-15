function isValid(s: string): boolean {
    if (s.length % 2 != 0)
        return false
    let stack = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(' || s[i] == '[' || s[i] == '{') 
            stack.push(s[i]);
        else {
            switch (s[i]) {
                case ')': {
                    if (stack.pop() != '(') {
                        return false
                    }
                    break;
                }
                case ']': {
                    if (stack.pop() != '[') {
                        return false
                    }
                    break;
                }
                case '}': {
                    if (stack.pop() != '{') {
                        return false
                    }
                    break;
                }
            }
        }
    }
    if (stack.length == 0)
        return true
    else 
        return false
};