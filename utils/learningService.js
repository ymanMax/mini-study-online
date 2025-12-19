// 学习服务工具类
// 处理用户学习行为追踪、兴趣标签管理和个性化推荐

import { mockRequest } from './mock.js';

class LearningService {
  constructor() {
    this.userBehavior = null;
    this.userInterests = [];
    this.learningPath = null;
  }

  /**
   * 初始化用户学习数据
   */
  async initUserData() {
    try {
      const behaviorResponse = await mockRequest('user/learning-behavior');
      this.userBehavior = behaviorResponse.data.message;
      this.userInterests = this.userBehavior.interests || [];

      const pathResponse = await mockRequest('learning-path/personalized');
      this.learningPath = pathResponse.data.message;

      return {
        success: true,
        data: {
          behavior: this.userBehavior,
          interests: this.userInterests,
          learningPath: this.learningPath
        }
      };
    } catch (error) {
      console.error('初始化用户学习数据失败:', error);
      return {
        success: false,
        error: error.errMsg
      };
    }
  }

  /**
   * 追踪用户学习行为
   * @param {Object} behaviorData 学习行为数据
   */
  async trackLearningBehavior(behaviorData) {
    try {
      // 这里可以添加实际的行为追踪逻辑
      console.log('追踪学习行为:', behaviorData);

      // 更新用户兴趣标签
      await this.updateUserInterests(behaviorData);

      return {
        success: true,
        message: '学习行为追踪成功'
      };
    } catch (error) {
      console.error('追踪学习行为失败:', error);
      return {
        success: false,
        error: error.errMsg
      };
    }
  }

  /**
   * 更新用户兴趣标签
   * @param {Object} behaviorData 学习行为数据
   */
  async updateUserInterests(behaviorData) {
    try {
      // 简单的兴趣标签更新逻辑
      // 实际项目中可以使用更复杂的算法
      const { course_id, course_name, study_time, progress } = behaviorData;

      // 提取课程标签（这里简化处理）
      const courseTags = this.extractCourseTags(course_name);

      // 更新兴趣标签分数
      courseTags.forEach(tag => {
        const existingTag = this.userInterests.find(interest => interest.tag === tag);
        if (existingTag) {
          // 根据学习时间和进度调整分数
          const scoreIncrease = (study_time / 60) * 0.01 + (progress / 100) * 0.02;
          existingTag.score = Math.min(1, existingTag.score + scoreIncrease);
        } else {
          this.userInterests.push({
            tag: tag,
            score: 0.3 + (study_time / 60) * 0.01
          });
        }
      });

      // 按分数排序兴趣标签
      this.userInterests.sort((a, b) => b.score - a.score);

      console.log('更新后的兴趣标签:', this.userInterests);

      return {
        success: true,
        interests: this.userInterests
      };
    } catch (error) {
      console.error('更新用户兴趣标签失败:', error);
      return {
        success: false,
        error: error.errMsg
      };
    }
  }

  /**
   * 提取课程标签
   * @param {String} courseName 课程名称
   * @returns {Array} 课程标签数组
   */
  extractCourseTags(courseName) {
    const tagMap = {
      '前端开发': ['前端开发', 'Web开发'],
      'JavaScript': ['JavaScript', 'JS'],
      'React': ['React', '前端框架'],
      'Vue': ['Vue', '前端框架'],
      'Node.js': ['Node.js', '后端开发', 'JavaScript'],
      'Python': ['Python', '编程语言'],
      'TypeScript': ['TypeScript', 'JavaScript'],
      '小程序': ['小程序', '微信开发'],
      '工程化': ['工程化', '开发流程']
    };

    const tags = [];

    Object.keys(tagMap).forEach(key => {
      if (courseName.includes(key)) {
        tags.push(...tagMap[key]);
      }
    });

    // 去重
    return [...new Set(tags)];
  }

  /**
   * 获取个性化课程推荐
   * @param {Number} limit 推荐数量限制
   * @returns {Array} 推荐课程列表
   */
  async getPersonalizedRecommendations(limit = 4) {
    try {
      const response = await mockRequest('recommend/guess-you-like');
      const recommendations = response.data.message;

      // 根据用户兴趣标签进一步筛选和排序
      const filteredRecommendations = this.filterRecommendationsByInterests(recommendations);

      return {
        success: true,
        data: filteredRecommendations.slice(0, limit)
      };
    } catch (error) {
      console.error('获取个性化推荐失败:', error);
      return {
        success: false,
        error: error.errMsg
      };
    }
  }

  /**
   * 根据用户兴趣标签筛选推荐课程
   * @param {Array} recommendations 推荐课程列表
   * @returns {Array} 筛选后的课程列表
   */
  filterRecommendationsByInterests(recommendations) {
    // 简单的兴趣匹配逻辑
    return recommendations.map(course => {
      // 计算课程与用户兴趣的匹配度
      let matchScore = course.match_score || 0;

      // 根据课程标签和用户兴趣进一步调整匹配度
      course.tags.forEach(tag => {
        const interest = this.userInterests.find(i => i.tag === tag);
        if (interest) {
          matchScore += interest.score * 0.1;
        }
      });

      return {
        ...course,
        match_score: Math.min(1, matchScore)
      };
    }).sort((a, b) => b.match_score - a.match_score);
  }

  /**
   * 获取热门课程推荐
   * @param {Number} limit 推荐数量限制
   * @returns {Array} 热门课程列表
   */
  async getHotCourses(limit = 4) {
    try {
      const response = await mockRequest('recommend/hot-courses');
      const hotCourses = response.data.message;

      return {
        success: true,
        data: hotCourses.slice(0, limit)
      };
    } catch (error) {
      console.error('获取热门课程失败:', error);
      return {
        success: false,
        error: error.errMsg
      };
    }
  }

  /**
   * 获取学习能力测评题目
   * @returns {Array} 测评题目列表
   */
  async getAssessmentQuestions() {
    try {
      const response = await mockRequest('assessment/questions');
      return {
        success: true,
        data: response.data.message
      };
    } catch (error) {
      console.error('获取测评题目失败:', error);
      return {
        success: false,
        error: error.errMsg
      };
    }
  }

  /**
   * 提交学习能力测评答案
   * @param {Array} answers 答案数组
   * @returns {Object} 测评结果
   */
  async submitAssessmentAnswers(answers) {
    try {
      // 这里可以添加实际的测评逻辑
      console.log('提交测评答案:', answers);

      // 模拟获取测评结果
      const response = await mockRequest('assessment/result');

      return {
        success: true,
        data: response.data.message
      };
    } catch (error) {
      console.error('提交测评答案失败:', error);
      return {
        success: false,
        error: error.errMsg
      };
    }
  }

  /**
   * 获取个性化学习路径
   * @returns {Object} 学习路径信息
   */
  async getLearningPath() {
    try {
      if (!this.learningPath) {
        const response = await mockRequest('learning-path/personalized');
        this.learningPath = response.data.message;
      }

      return {
        success: true,
        data: this.learningPath
      };
    } catch (error) {
      console.error('获取学习路径失败:', error);
      return {
        success: false,
        error: error.errMsg
      };
    }
  }

  /**
   * 获取学习目标
   * @returns {Array} 学习目标列表
   */
  async getLearningGoals() {
    try {
      const response = await mockRequest('learning-goal/management');
      return {
        success: true,
        data: response.data.message.goals
      };
    } catch (error) {
      console.error('获取学习目标失败:', error);
      return {
        success: false,
        error: error.errMsg
      };
    }
  }

  /**
   * 创建学习目标
   * @param {Object} goalData 目标数据
   * @returns {Object} 操作结果
   */
  async createLearningGoal(goalData) {
    try {
      // 这里可以添加实际的创建逻辑
      console.log('创建学习目标:', goalData);

      return {
        success: true,
        message: '学习目标创建成功',
        data: {
          id: Date.now(),
          ...goalData,
          progress: 0,
          status: 'in_progress'
        }
      };
    } catch (error) {
      console.error('创建学习目标失败:', error);
      return {
        success: false,
        error: error.errMsg
      };
    }
  }

  /**
   * 获取学习进度提醒
   * @returns {Array} 提醒列表
   */
  async getLearningReminders() {
    try {
      const response = await mockRequest('learning-reminder/progress');
      return {
        success: true,
        data: response.data.message
      };
    } catch (error) {
      console.error('获取学习提醒失败:', error);
      return {
        success: false,
        error: error.errMsg
      };
    }
  }

  /**
   * 根据学习效果动态调整推荐
   * @param {Object} learningEffect 学习效果数据
   * @returns {Array} 调整后的推荐列表
   */
  async adjustRecommendationsByEffect(learningEffect) {
    try {
      console.log('根据学习效果调整推荐:', learningEffect);

      // 获取基础推荐
      const recommendationsResponse = await this.getPersonalizedRecommendations(10);

      if (!recommendationsResponse.success) {
        throw new Error('获取推荐列表失败');
      }

      let recommendations = recommendationsResponse.data;

      // 根据学习效果智能调整推荐策略
      if (learningEffect.total_courses === 0) {
        // 新用户，推荐热门基础课程
        console.log('新用户推荐策略');
        recommendations = recommendations.filter(course => course.level === 1);

        // 如果基础课程不足，补充热门课程
        if (recommendations.length < 4) {
          const hotCoursesResponse = await this.getHotCourses(8);
          if (hotCoursesResponse.success) {
            const hotCourses = hotCoursesResponse.data.filter(course => course.level === 1);
            recommendations = [...recommendations, ...hotCourses];
            // 去重
            const uniqueRecommendations = [];
            const seenIds = new Set();
            recommendations.forEach(course => {
              if (!seenIds.has(course.id)) {
                seenIds.add(course.id);
                uniqueRecommendations.push(course);
              }
            });
            recommendations = uniqueRecommendations;
          }
        }
      } else if (learningEffect.average_progress < 30) {
        // 学习进度较慢，推荐难度较低、内容更基础的课程
        console.log('学习进度较慢推荐策略');
        recommendations = recommendations.filter(course => {
          // 优先推荐难度1-2的课程
          return course.level <= 2;
        });

        // 调整匹配度权重，更倾向于匹配度高的基础课程
        recommendations = recommendations.map(course => {
          let adjustedScore = course.match_score;
          // 基础课程额外加分
          if (course.level === 1) {
            adjustedScore += 0.15;
          } else if (course.level === 2) {
            adjustedScore += 0.05;
          }
          return {
            ...course,
            match_score: Math.min(1, adjustedScore)
          };
        }).sort((a, b) => b.match_score - a.match_score);
      } else if (learningEffect.average_progress > 70 && learningEffect.completion_rate > 0.5) {
        // 学习进度快且完成率高，推荐更高级、挑战性更大的课程
        console.log('学习进度快推荐策略');
        recommendations = recommendations.filter(course => {
          // 优先推荐难度2-3的课程
          return course.level >= 2;
        });

        // 调整匹配度权重，更倾向于高级课程
        recommendations = recommendations.map(course => {
          let adjustedScore = course.match_score;
          // 高级课程额外加分
          if (course.level === 3) {
            adjustedScore += 0.2;
          } else if (course.level === 2) {
            adjustedScore += 0.05;
          }
          return {
            ...course,
            match_score: Math.min(1, adjustedScore)
          };
        }).sort((a, b) => b.match_score - a.match_score);
      } else if (learningEffect.total_study_time > 300) {
        // 学习时间较长，推荐更深入、实战性强的课程
        console.log('学习时间较长推荐策略');
        // 假设实战性强的课程标签包含"实战"、"项目"、"高级"等
        recommendations = recommendations.filter(course => {
          return course.tags && (course.tags.includes('实战') || course.tags.includes('项目') || course.level === 3);
        });

        // 如果符合条件的课程不足，补充推荐
        if (recommendations.length < 4) {
          const additionalRecommendations = recommendationsResponse.data.filter(course => {
            return !recommendations.some(r => r.id === course.id);
          });
          recommendations = [...recommendations, ...additionalRecommendations];
        }
      } else {
        // 普通学习情况，保持原有推荐策略
        console.log('普通学习情况推荐策略');
      }

      console.log('调整后的推荐列表:', recommendations);

      return {
        success: true,
        data: recommendations.slice(0, 4)
      };
    } catch (error) {
      console.error('调整推荐失败:', error);
      return {
        success: false,
        error: error.errMsg
      };
    }
  }
}

// 导出单例实例
export const learningService = new LearningService();
